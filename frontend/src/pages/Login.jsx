import { useState } from "react"
import { useDispatch } from "react-redux";

import FormLogin from '../components/login/FormLogin'
import ButtonLogin from "../components/login/ButtonLogin"
import { login } from "../redux/user/slice";

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setForm((prevState) => ({ ...prevState, [name]: value }))
  }

  return(
    <>
      <FormLogin
        form={ form }
        handleChange={ handleChange }
      />
      <ButtonLogin
        dispatch={ dispatch }
        login={ login }
        form={ form }
      />
    </>
  );
}
