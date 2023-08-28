import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const { username, email, password } = formState;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    handleChange,
    handleResetForm,
  };
};

export default useForm;
