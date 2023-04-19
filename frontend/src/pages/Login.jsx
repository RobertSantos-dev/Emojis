import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginApi } from "../api/user";
import FormLogin from "../components/login/FormLogin";
import ButtonLogin from "../components/login/ButtonLogin";
import ButtonCreate from "../components/login/ButtonCreate";

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setForm((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <>
      <FormLogin
        form={ form }
        handleChange={ handleChange }
      />
      <ButtonLogin
        loginApi={ loginApi }
        form={ form }
        history={ history }
        dispatch={ dispatch }
      />
      <ButtonCreate history={ history } />
    </>
  );
}
