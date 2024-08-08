export default async function checkEmailValidity(isEmailValid, setStatus) {
  setStatus((prevStatus) => ({
    ...prevStatus,
    email: { color: isEmailValid ? "green" : "red", message: isEmailValid ? "valid" : "invalid" },
  }));
}
