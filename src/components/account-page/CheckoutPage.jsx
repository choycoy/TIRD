import React, { useEffect, useState } from "react";
import { loadTossPayments, ANONYMOUS } from "@tosspayments/tosspayments-sdk";
import { db } from "../../firebase";
import { ref, update, get } from "firebase/database";
import { useUser } from "../UserContext";

const generateRandomString = () => window.btoa(Math.random()).slice(0, 20);
const clientKey = process.env.REACT_APP_TOSS_PAYMENTS_CLIENT_KEY;

export function CheckoutPage({ amountInput, userUid, appliedPoint }) {
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState(null);
  const [amount, setAmount] = useState({
    currency: "KRW",
    value: amountInput,
  });
  const { user, setUser } = useUser();

  useEffect(() => {
    async function fetchPaymentWidgets() {
      const tossPayments = await loadTossPayments(clientKey);
      const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });
      setWidgets(widgets);
    }

    fetchPaymentWidgets();
  }, [clientKey]);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (widgets == null) {
        return;
      }
      await widgets.setAmount(amount);

      await Promise.all([
        widgets.renderPaymentMethods({
          selector: "#payment-method",
          variantKey: "DEFAULT",
        }),
        widgets.renderAgreement({
          selector: "#agreement",
          variantKey: "AGREEMENT",
        }),
      ]);

      setReady(true);
    }

    renderPaymentWidgets();
  }, [widgets, amount]);

  const handlePayment = async () => {
    try {
      const userRef = ref(db, `users/${userUid}`);
      const userSnapshot = await get(userRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.val();

        const currentPoints = userData.point || 0;
        const currentBalance = userData.balance || 0;
        const newPoints = currentPoints - appliedPoint;
        const newBalance = parseInt(currentBalance, 10) + amountInput;

        await update(userRef, {
          balance: newBalance,
          point: newPoints > 0 ? newPoints : 0,
        });

        const updatedUser = {
          uid: userUid,
          email: user.email,
          balance: newBalance,
          nickname: userData.nickname,
          point: newPoints,
        };

        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));

        await widgets?.requestPayment({
          orderId: generateRandomString(),
          orderName: "top-up " + amountInput,
          customerName: user.uid,
          customerEmail: user.email,
          successUrl: process.env.REACT_APP_TOSS_PAYMENTS_SUCESS_REDIRECT_URI,
          failUrl: process.env.REACT_APP_TOSS_PAYMENTS_FAIL_REDIRECT_URI,
        });
      }
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <div className="wrapper" style={{ width: "70%", margin: "0 auto" }}>
      <div className="max-w-540 w-100">
        <div id="payment-method" className="w-100" />
        <div id="agreement" className="w-100" />
        <div className="btn-wrapper w-100">
          <button
            className="btn primary"
            style={{
              backgroundColor: " #3282f6",
              border: "transparent",
              padding: "16px 0",
              borderRadius: "8px",
              color: "white",
              width: "100%",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={handlePayment}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}
