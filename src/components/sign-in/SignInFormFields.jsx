import React from "react";
import { useForm } from "react-hook-form";
import { SignInInput, ButtonContainer, ActionButton } from "../../style/StyledComponents";

export default function SignInFormFields({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
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
  );
}
