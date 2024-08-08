import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export function useFormFieldValidation(fields) {
  const { register, handleSubmit, watch, setError, clearErrors } = useForm();
  const [status, setStatus] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.id]: { color: "green", message: "" } }), {})
  );

  const values = fields.reduce((acc, field) => ({ ...acc, [field.id]: watch(field.id, "") }), {});

  useEffect(() => {
    fields.forEach((field) => {
      if (field.validationCheck) {
        field.validationCheck(values[field.id], setStatus, setError, clearErrors);
      }
    });
  }, [values, fields]);

  return { register, handleSubmit, status, values, setStatus };
}
