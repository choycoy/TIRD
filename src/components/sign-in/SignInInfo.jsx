import { InfoText } from "../../style/StyledComponents";
export default function SignInInfo({ marginTop }) {
  return (
    <InfoText $marginTop={marginTop}>
      By signing up, you agree to the
      <a href="#" rel="noopener noreferrer">
        {" "}
        Terms of Service
      </a>{" "}
      and
      <a href="#" rel="noopener noreferrer">
        {" "}
        Privacy Policy
      </a>
      , including
      <a href="#" rel="noopener noreferrer">
        {" "}
        Cookie Use
      </a>
      .
    </InfoText>
  );
}
