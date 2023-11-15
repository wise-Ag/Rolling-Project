import { useState } from "react";

const useInput = ({ errorText = "" }) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    if (value === "") {
      console.log("블러");
      setErrorMessage(errorText);
    }
  };

  const handleFocus = () => {
    console.log("뽀커스");
    setErrorMessage("");
  };

  return {
    value,
    setValue,
    errorMessage,
    handleChange,
    handleBlur,
    handleFocus,
  };
};

export default useInput;
