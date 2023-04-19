import { useState } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { registerApi } from "../api/user";
import FormRegister from "../components/register/FormRegister";
import ButtonRegister from "../components/register/ButtonRegister";

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setForm((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <>
      <FormRegister
        form={ form }
        handleChange={ handleChange }
      />
      <ButtonRegister
        registerApi={ registerApi }
        form={ form }
        history={ history }
        dispatch={ dispatch }
      />
    </>
  );
}