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

export default function PointArea({ pointInput, setPointInput, totalPoint }) {
  const [btnText, setBtnText] = useState("all");

  const handlePointOnChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    if (/^\d*$/.test(value)) {
      setPointInput(value);
      setBtnText("apply");
    }
  };
  const handleApplyButtonClick = () => {
    const numericPointInput = parseInt(pointInput.replace(/,/g, ""), 10);
    if (btnText === "all") {
      setPointInput(totalPoint.toString());
      setBtnText("applied");
    } else if (numericPointInput > totalPoint) {
      setPointInput(totalPoint.toString());
      setBtnText("applied");
    } else {
      setPointInput(numericPointInput.toString());
      setBtnText("applied");
    }
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
