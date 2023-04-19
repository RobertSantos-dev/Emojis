export default function ButtonLogin(
    { loginApi, form, history, dispatch }
  ) {
  return (
    <button
      type="submit"
      onClick={ () => loginApi(form, history, dispatch) }
    >
      Login
    </button>
  );
}