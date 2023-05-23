export default function ButtonRegister(
    { registerApi, form, history, dispatch }
  ) {
    return (
      <div className="div-btn">
        <button
          type="submit"
          className="btn-register"
          onClick={ () => registerApi(form, history, dispatch) }
        >
          Registrar
        </button>
      </div>
    );
  }