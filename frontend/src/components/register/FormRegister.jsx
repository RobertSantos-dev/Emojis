export default function FormRegister({ form, handleChange }) {
    return(
      <form>
        <fieldset className="userName">
          <label htmlFor="nameId">
            Nome:
            {' '}
            <input
              type="text"
              id="nameId"
              name="name"
              value={ form.name }
              onChange={ handleChange }
            />
          </label>
        </fieldset>
        <fieldset className="userEmail">
          <label htmlFor="emailId">
            Email:
            {' '}
            <input
              type="email"
              id="emailId"
              name="email"
              value={ form.email }
              onChange={ handleChange }
            />
          </label>
        </fieldset>
        <fieldset className="userPassword">
          <label htmlFor="passwordId">
            Senha:
            {' '}
            <input
              type="password"
              id="passwordId"
              name="password"
              value={ form.password }
              onChange={ handleChange }
            />
          </label>
        </fieldset>
      </form>
    );
  }