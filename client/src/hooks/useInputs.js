import { useState } from "react";

function useInputs(initialInputs) {
  const [inputs, setInputs] = useState(initialInputs);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs(initialInputs);
  };

  // return 순서
  return [inputs, onChange, onReset];
}

export default useInputs;
