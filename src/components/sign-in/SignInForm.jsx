import kakaotalkIcon from "../../img/kakaotalk-icon.png";
import { Button, KakaoIcon, OrSpan, ModalContainer, ActionText, ActionLink } from "../../style/StyledComponents";
import { useNavigate } from "react-router";
import { useUser } from "../UserContext";
import SignInFormFields from "./SignInFormFields";
import { handleSignIn } from "../utils/handleSignIn";
export default function SignInForm({ setFormType }) {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${
    process.env.REACT_APP_KAKAO_API_KEY
  }&redirect_uri=${encodeURIComponent(process.env.REACT_APP_SIGNIN_REDIRECT_URI)}&response_type=code`;

  return (
    <ModalContainer>
      <Button className="kakao" onClick={() => (window.location.href = KAKAO_AUTH_URL)}>
        <KakaoIcon src={kakaotalkIcon} alt="KakaoTalk Icon" />
        Sign in with Kakao Talk
      </Button>
      <OrSpan>or</OrSpan>
      <SignInFormFields onSubmit={(data) => handleSignIn(data, setUser, navigate)} />
      <ActionText $noMarginTop={false}>
        Don't have an account? <ActionLink onClick={() => setFormType("signUpPage")}>Sign Up</ActionLink>
      </ActionText>
    </ModalContainer>
  );
}
//    <ActionButton>Forgot your password</ActionButton>
