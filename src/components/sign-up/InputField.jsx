import { InputWithStatus, StatusText } from "../../style/StyledComponents";
export default function InputField({ id, label, register, validation, value, status }) {
  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <InputWithStatus>
        <input type={id === "pwd" ? "password" : "text"} id={id} {...register(id, validation)} />
        <StatusText $status={status.color}>{value ? status.message : validation?.minLength?.message}</StatusText>
      </InputWithStatus>
    </label>
  );
}
