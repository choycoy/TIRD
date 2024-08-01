import kakaotalkIcon from "../../img/kakaotalk-icon.png";
import { ModalContainer, Button, KakaoIcon, OrSpan, ActionLink, ActionText } from "../../style/StyledComponents";
import SignInInfo from "../sign-in/SignInInfo";
export default function SignUpPage({ setFormType }) {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${
    process.env.REACT_APP_KAKAO_API_KEY
  }&redirect_uri=${encodeURIComponent(process.env.REACT_APP_REDIRECT_URI)}&response_type=code`;
  return (
    <ModalContainer>
      <Button className="kakao" onClick={() => (window.location.href = KAKAO_AUTH_URL)}>
        <KakaoIcon src={kakaotalkIcon} alt="KakaoTalk Icon" />
        Sign up with Kakao Talk
      </Button>
      <OrSpan>or</OrSpan>
      <Button className="create" onClick={() => setFormType("signUp")}>
        Create account
      </Button>
      <SignInInfo marginTop="24px" />
      <ActionText $noMarginTop={true}>
        Have an account already? <ActionLink onClick={() => setFormType("signIn")}>Log in</ActionLink>
      </ActionText>
    </ModalContainer>
  );
}
