import {
  AmountSection,
  DynamicAmountInput,
  AmountInputSection,
  AmountTitle,
  AmountInput,
  MinAmountText,
} from "../../style/StyledComponents";
import { useState, useEffect } from "react";

export default function AmountArea({ amountInput, setAmountInput, minAmount }) {
  const [textColor, setTextColor] = useState("#d3d3d3");
  const formatNumber = (number) => {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const handleAmountOnChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    if (!value) {
      setAmountInput("");
    } else if (/^\d*$/.test(value)) {
      setAmountInput(formatNumber(value));
    }
  };

  useEffect(() => {
    const numericValue = parseInt(amountInput.replace(/,/g, ""), 10);
    if (numericValue < 10000) {
      setTextColor("red");
    } else {
      setTextColor("#d3d3d3");
    }
  }, [amountInput]);

  return (
    <AmountSection>
      <span>₩</span>
      <DynamicAmountInput type="text" value={amountInput} onChange={handleAmountOnChange} />
      <AmountInputSection>
        <AmountTitle>Amount</AmountTitle>
        <AmountInput
          type="text"
          value={amountInput}
          onChange={handleAmountOnChange}
          placeholder="Enter top-up amount"
        />
        <MinAmountText $color={textColor}>Minimum top-up amount is ₩ {formatNumber(minAmount)}</MinAmountText>
      </AmountInputSection>
    </AmountSection>
  );
}
