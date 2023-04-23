import { useSelector } from "react-redux";

export default function Header() {
  const selector = useSelector(({ user: { login } }) => login.email);

  return (
    <header>
      <div>Emojis Rede</div>
      <div>
        <span>{ selector }</span>
        <button>sair</button>
      </div>
    </header>
  );
}