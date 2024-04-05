import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useUser = () => {
  const navigate = useNavigate();
  const initialForm = {
    user: "",
    password: "",
  };

  const [formState, setFormState] = useState(initialForm);

  const onResetForm = () => {
    setFormState(initialForm);
  };
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onLogin = async () => {
    navigate("/Home");
  };

  return {
    onLogin,
    formState,
    onInputChange,
    onResetForm,
  };
};
