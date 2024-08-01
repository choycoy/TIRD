import kakaotalkIcon from "../../img/kakaotalk-icon.png";
import {
  Button,
  KakaoIcon,
  OrSpan,
  ModalContainer,
  SignInInput,
  ButtonContainer,
  ActionButton,
  ActionText,
  ActionLink,
} from "../../style/StyledComponents";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { app } from "../../firebase";
export default function SignInForm({ setFormType }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const auth = getAuth(app);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in: ", error);
      alert("Failed to sign in. Please check your email and password.");
    }
  };

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${
    process.env.REACT_APP_KAKAO_API_KEY
  }&redirect_uri=${encodeURIComponent(process.env.REACT_APP_REDIRECT_URI)}&response_type=code`;

  return (
    <ModalContainer>
      <Button className="kakao" onClick={() => (window.location.href = KAKAO_AUTH_URL)}>
        <KakaoIcon src={kakaotalkIcon} alt="KakaoTalk Icon" />
        Sign in with Kakao Talk
      </Button>
      <OrSpan>or</OrSpan>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SignInInput
          placeholder="Enter your email address"
          type="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <SignInInput
          placeholder="Enter your password"
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        <ButtonContainer>
          <ActionButton type="submit">Sign in</ActionButton>
        </ButtonContainer>
      </form>
      <ActionText $noMarginTop={false}>
        Don't have an account? <ActionLink onClick={() => setFormType("signUpPage")}>Sign Up</ActionLink>
      </ActionText>
    </ModalContainer>
  );
}
//    <ActionButton>Forgot your password</ActionButton>
