import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { InputFormContainer, SignUpButton } from "../../style/StyledComponents";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";
import useCheckField from "../../hooks/useCheckField";
import { useUser } from "../UserContext";
import InputField from "./InputField";
import validatePassword from "../utils/validatePassword";
import handleUserRegisteration from "../utils/handleUserRegisteration";
import checkEmailValidity from "../utils/checkEmailValidty";

export default function InputForms() {
  const { register, handleSubmit, watch, setError, clearErrors } = useForm();
  const navigate = useNavigate();
  const auth = getAuth(app);
  const { setUser } = useUser();

  const [status, setStatus] = useState({
    email: { color: "green", message: "" },
    nickname: { color: "green", message: "" },
  });

  const pwdValue = watch("pwd", "");
  const nicknameValue = watch("nickname", "");
  const emailValue = watch("email", "");

  const { isPwdValid, pwdStatusText, pwdStatusColor } = validatePassword(pwdValue);

  useCheckField(nicknameValue, "nicknameList", 4, "nickname", setStatus, setError, clearErrors);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailPattern.test(emailValue);
  useEffect(() => {
    checkEmailValidity(isEmailValid, setStatus);
  }, [emailValue, isEmailValid]);

  const isFormValid = () => {
    return status.nickname.message === "available" && isPwdValid && isEmailValid;
  };

  const onSubmit = async (data) => {
    if (isFormValid()) {
      await handleUserRegisteration(auth, data, setError, setStatus, setUser, navigate);
    }
  };
  return (
    <InputFormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputField
        id="email"
        label="Email"
        register={register}
        validation={{ required: true, pattern: { value: emailPattern, message: "invalid email" } }}
        value={emailValue}
        status={status.email}
      />
      <InputField
        id="pwd"
        label="Password"
        register={register}
        validation={{ required: true, minLength: { value: 6, message: "min length: 6" } }}
        value={pwdValue}
        status={{ color: pwdStatusColor, message: pwdStatusText }}
      />
      <InputField
        id="nickname"
        label="Nickname"
        register={register}
        validation={{ required: true, minLength: { value: 4, message: "min length: 4" } }}
        value={nicknameValue}
        status={status.nickname}
      />

      <SignUpButton type="submit">Sign up</SignUpButton>
    </InputFormContainer>
  );
}
