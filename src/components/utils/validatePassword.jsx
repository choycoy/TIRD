export default function validatePassword(pwdValue) {
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

  return { isPwdValid, pwdStatusText, pwdStatusColor };
}
