import SignInFormFields from "./SignInFormFields";
import { handleSignIn } from "../utils/handleSignIn";
import { useNavigate } from "react-router";
import { useUser } from "../UserContext";
import { ModalContainer } from "../../style/StyledComponents";
export default function SignInWithNoKakao() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  return (
    <ModalContainer>
      <SignInFormFields onSubmit={(data) => handleSignIn(data, setUser, navigate)} />
    </ModalContainer>
  );
}
