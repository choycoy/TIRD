import { TotalText, TopUpBtn } from "../../style/StyledComponents";
export default function TotalArea({ total, setShowModal }) {
  return (
    <div>
      <TotalText>
        {" "}
        <span>₩</span>
        {total}
      </TotalText>
      <TopUpBtn onClick={() => setShowModal(true)}>top-up</TopUpBtn>
    </div>
  );
}
