export default function FormRegister({ form, handleChange }) {
    return(
      <form>
        <fieldset>
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
        <fieldset>
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
        <fieldset>
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