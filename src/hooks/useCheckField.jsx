import { useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../firebase";

const useCheckField = (fieldValue, fieldRefPath, minLength, fieldName, setStatus, setError, clearErrors) => {
  useEffect(() => {
    const checkField = async () => {
      if (fieldValue.length >= minLength) {
        try {
          const fieldRef = ref(db, fieldRefPath);
          const fieldSnapshot = await get(fieldRef);
          if (fieldSnapshot.exists()) {
            const fieldList = fieldSnapshot.val();
            const fieldValues = Object.values(fieldList);
            const fieldExists = fieldValues.includes(fieldValue);

            if (fieldExists) {
              setStatus((prevStatus) => ({
                ...prevStatus,
                [fieldName]: { color: "red", message: "unavailable" },
              }));
              setError(fieldName, {
                type: "manual",
                message: "already registered",
              });
            } else {
              setStatus((prevStatus) => ({
                ...prevStatus,
                [fieldName]: { color: "green", message: "available" },
              }));
              clearErrors(fieldName);
            }
          }
        } catch (error) {
          console.error("Error checking field:", error);
          setStatus((prevStatus) => ({
            ...prevStatus,
            [fieldName]: { color: "red", message: "error" },
          }));
        }
      } else {
        setStatus((prevStatus) => ({
          ...prevStatus,
          [fieldName]: { color: "red", message: `min length: ${minLength}` },
        }));
      }
    };

    checkField();
  }, [fieldValue, fieldRefPath, minLength, fieldName, setStatus, setError, clearErrors]);
};

export default useCheckField;
