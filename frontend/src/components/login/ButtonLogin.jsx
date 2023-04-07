export default function ButtonLogin({ dispatch, login, form }) {
  return (
    <button
      type="submit"
      onClick={ () => dispatch(login(form)) }
    >
      Login
    </button>
  );
}