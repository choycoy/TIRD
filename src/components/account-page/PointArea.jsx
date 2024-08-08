import {
  PointInput,
  PointSection,
  PointTitle,
  AvailablePointsSection,
  AvailablePointsTitle,
  PointInputSection,
  ApplyBtn,
} from "../../style/StyledComponents";
import { useState } from "react";

export default function PointArea({ pointInput, setPointInput, totalPoint, onApplyClick }) {
  const [btnText, setBtnText] = useState("all");

  const handlePointOnChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    if (!value) {
      setPointInput("");
      setBtnText("all");
    } else if (/^\d*$/.test(value)) {
      if (parseInt(value, 10) > totalPoint) {
        setPointInput(totalPoint.toString());
      } else {
        setPointInput(value);
      }
      setBtnText("applied");
    }
  };

  const handleApplyButtonClick = () => {
    const numericPointInput = parseInt(pointInput.replace(/,/g, ""), 10);
    if (btnText === "all") {
      setPointInput(totalPoint.toString());
    } else if (numericPointInput > totalPoint) {
      setPointInput(totalPoint.toString());
    } else {
      setPointInput(numericPointInput.toString());
    }
    setBtnText("applied");
    onApplyClick(numericPointInput);
  };

  return (
    <PointSection>
      <PointTitle>Your TIRD points</PointTitle>
      <AvailablePointsSection>
        <AvailablePointsTitle>Available points</AvailablePointsTitle>
        <span style={{ color: "#a0c6fa", fontSize: "16px", fontWeight: "bold" }}>{totalPoint.toLocaleString()}</span>
      </AvailablePointsSection>
      <PointInputSection>
        <PointInput value={pointInput} onChange={handlePointOnChange} />
        <ApplyBtn onClick={handleApplyButtonClick}>{btnText}</ApplyBtn>
      </PointInputSection>
    </PointSection>
  );
}
