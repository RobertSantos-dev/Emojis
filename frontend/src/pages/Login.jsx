import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginApi } from "../api/user";
import IconLogin from "../components/login/IconLogin";
import FormLogin from "../components/login/FormLogin";
import ButtonLogin from "../components/login/ButtonLogin";
import ButtonCreate from "../components/login/ButtonCreate";
import "../styles/loginStyles/Login.css";

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setForm((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <section className="login">
      <IconLogin />
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
    </section>
  );
}
