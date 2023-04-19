export default function ButtonCreate({ history }) {
  return (
    <button
      type="button"
      onClick={ () => history.push('/register') }
    >
      Criar Conta
    </button>
  );
}