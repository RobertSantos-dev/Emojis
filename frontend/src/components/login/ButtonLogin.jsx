export default function ButtonLogin(
    { loginApi, form, history, dispatch }
  ) {
  return (
    <button
      type="submit"
      className="btn-submit"
      onClick={ () => loginApi(form, history, dispatch) }
    >
      Login
    </button>
  );
}