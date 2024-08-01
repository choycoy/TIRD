import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { InputFormContainer, InputWithStatus, StatusText, SignUpButton } from "../../style/StyledComponents";
import { ref, set, push } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app, db } from "../../firebase";
import useCheckField from "../../hooks/useCheckField";

export default function InputForms() {
  const { register, handleSubmit, watch, setError, clearErrors } = useForm();
  const navigate = useNavigate();
  const auth = getAuth(app);

  const [status, setStatus] = useState({
    email: { color: "green", message: "" },
    id: { color: "green", message: "" },
    nickname: { color: "green", message: "" },
  });

  const idValue = watch("id", "");
  const pwdValue = watch("pwd", "");
  const nicknameValue = watch("nickname", "");
  const emailValue = watch("email", "");

  const hasUpperCase = /[A-Z]/.test(pwdValue);
  const hasLowerCase = /[a-z]/.test(pwdValue);
  const hasNumber = /\d/.test(pwdValue);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwdValue);
  const isPwdValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && pwdValue.length >= 6;
  const pwdStatusText = !pwdValue
    ? ""
    : !hasUpperCase
    ? "Uppercase required"
    : !hasLowerCase
    ? "Lowercase required"
    : !hasNumber
    ? "Number required"
    : !hasSpecialChar
    ? "Special char required"
    : pwdValue.length < 6
    ? "min length: 6"
    : "Password strong";
  const pwdStatusColor = !pwdValue ? "red" : !isPwdValid ? "orange" : "green";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailPattern.test(emailValue);

  useCheckField(idValue, "idList", 6, "id", setStatus, setError, clearErrors);
  useCheckField(nicknameValue, "nicknameList", 4, "nickname", setStatus, setError, clearErrors);
  useEffect(() => {
    const checkEmail = async () => {
      if (isEmailValid) {
        setStatus((prevStatus) => ({
          ...prevStatus,
          email: { color: "green", message: "valid" },
        }));
      } else {
        setStatus((prevStatus) => ({
          ...prevStatus,
          email: { color: "red", message: "invalid" },
        }));
      }
    };
    checkEmail();
  }, [emailValue]);
  const isFormValid = () => {
    return status.id.message === "available" && status.nickname.message === "available" && isPwdValid && isEmailValid;
  };

  const onSubmit = async (data) => {
    if (isFormValid()) {
      try {
        const createdUser = await createUserWithEmailAndPassword(auth, data.email, data.pwd);
        console.log(createdUser);
        const userRef = ref(db, `users/${createdUser.user.uid}`);
        await set(userRef, {
          id: data.id,
          nickname: data.nickname,
        });
        const idListRef = ref(db, `idList`);
        await push(idListRef, data.id);

        const nicknameListRef = ref(db, `nicknameList`);
        await push(nicknameListRef, data.nickname);
        navigate("/dashboard");
        console.log("User data saved to database");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setError("email", {
            type: "manual",
            message: "already registered",
          });
          setStatus((prevStatus) => ({
            ...prevStatus,
            email: { color: "red", message: "already registered" },
          }));
        } else {
          console.error(error);
        }
      }
    }
  };
  return (
    <InputFormContainer onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="id">
        <span>ID</span>
        <InputWithStatus>
          <input type="text" id="id" {...register("id", { required: true, minLength: 6 })} />
          <StatusText $status={status.id.color}> {idValue ? status.id.message : "min length: 6"}</StatusText>
        </InputWithStatus>
      </label>
      <label htmlFor="pwd">
        <span>Password</span>
        <InputWithStatus>
          <input type="password" id="pwd" {...register("pwd", { required: true, minLength: 6 })} />
          <StatusText $status={pwdStatusColor}>{pwdStatusText}</StatusText>
        </InputWithStatus>
      </label>
      <label htmlFor="nickname">
        <span>Nickname</span>
        <InputWithStatus>
          <input type="text" id="nickname" {...register("nickname", { required: true, minLength: 4 })} />
          <StatusText $status={status.nickname.color}>
            {nicknameValue ? status.nickname.message : "min length: 4"}
          </StatusText>
        </InputWithStatus>
      </label>
      <label htmlFor="email">
        <span>Email</span>
        <InputWithStatus>
          <input type="email" id="email" {...register("email", { required: true, pattern: emailPattern })} />
          <StatusText $status={status.email.color}>{emailValue ? status.email.message : ""}</StatusText>
        </InputWithStatus>
      </label>
      <SignUpButton type="submit">Sign up</SignUpButton>
    </InputFormContainer>
  );
}
