export default function Form({ form, handleChange }) {
  return(
    <form>
      <fieldset className="email">
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
      <fieldset className="password">
        <label htmlFor="passwordId">
          Password:
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