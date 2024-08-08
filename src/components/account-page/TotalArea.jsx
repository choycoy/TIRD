import { TotalText, TopUpBtn } from "../../style/StyledComponents";

export default function TotalArea({ total, setShowModal, minAmount }) {
  const numericTotal = typeof total === "string" ? parseInt(total.replace(/,/g, ""), 10) : total;

  const handleTopUpClick = () => {
    if (numericTotal >= minAmount) {
      setShowModal(true);
    }
  };

  return (
    <div>
      <TotalText>
        <span>₩</span>
        {typeof total === "number" ? total.toLocaleString() : total}
      </TotalText>
      <TopUpBtn
        onClick={handleTopUpClick}
        disabled={numericTotal < minAmount}
        style={{
          cursor: numericTotal < minAmount ? "not-allowed" : "pointer",
        }}
      >
        Top-Up
      </TopUpBtn>
    </div>
  );
}
