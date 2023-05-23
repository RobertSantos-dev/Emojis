export default function ButtonCreate({ history }) {
  return (
    <button
      type="button"
      className="btn-create"
      onClick={ () => history.push('/register') }
    >
      Criar Conta
    </button>
  );
}