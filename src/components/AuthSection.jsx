import React, { useState, useEffect } from "react";
import kakaotalkIcon from "../img/kakaotalk-icon.png";
import ModalPage from "./ModalPage";
import { SignUpContainer, Button, OrSpan, AlreadyAccount, KakaoIcon, Heading1 } from "../style/StyledComponents";
import InputForms from "./sign-up/InputForms";
import SignInForm from "./sign-in/SignInForm";
import SignUpPage from "./sign-up/SignUpPage";
import SignInWithNoKakao from "./sign-in/SignInWithNoKakao";
import SignInInfo from "./sign-in/SignInInfo";
import { useLocation, useNavigate } from "react-router-dom";

export default function AuthSection() {
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("modal");

    if (type) {
      setFormType(type);
      setShowModal(true);
    }
  }, [location.search]);

  const handleOpenModal = (type) => {
    setFormType(type);
    setShowModal(true);
    navigate(`/?modal=${type}`);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };
  console.log(formType === "signInWithNoKakao");
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${
    process.env.REACT_APP_KAKAO_API_KEY
  }&redirect_uri=${encodeURIComponent(process.env.REACT_APP_SIGNUP_REDIRECT_URI)}&response_type=code`;

  return (
    <SignUpContainer>
      <Button className="kakao" onClick={() => (window.location.href = KAKAO_AUTH_URL)}>
        <KakaoIcon src={kakaotalkIcon} alt="KakaoTalk Icon" />
        Sign up with Kakao Talk
      </Button>
      <OrSpan>or</OrSpan>
      <Button className="create" onClick={() => handleOpenModal("signUp")}>
        Create account
      </Button>
      <SignInInfo />
      <AlreadyAccount>Already have an account?</AlreadyAccount>
      <Button className="sign-in" onClick={() => handleOpenModal("signIn")}>
        Sign in
      </Button>
      {showModal && (
        <ModalPage onClose={handleCloseModal} formType={formType}>
          <Heading1 $formType={formType}>
            {formType === "signUp"
              ? "Create your account"
              : formType === "signIn" || formType === "signInWithNoKakao"
              ? "Log in to TIRD"
              : "Join TIRD today"}
          </Heading1>
          {formType === "signUp" && <InputForms />}
          {formType === "signIn" && <SignInForm setFormType={setFormType} />}
          {formType === "signInWithNoKakao" && <SignInWithNoKakao />}
          {formType === "signUpPage" && <SignUpPage setFormType={setFormType} />}
        </ModalPage>
      )}
    </SignUpContainer>
  );
}
