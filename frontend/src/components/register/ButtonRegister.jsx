export default function ButtonRegister(
    { registerApi, form, history, dispatch }
  ) {
    return (
      <button
        type="submit"
        onClick={ () => registerApi(form, history, dispatch) }
      >
        Registrar
      </button>
    );
  }