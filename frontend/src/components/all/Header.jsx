import { useSelector } from "react-redux";
import '../../styles/HeaderStyles/Header.css';
import { BsPower } from "react-icons/bs";

export default function Header() {
  const selector = useSelector(({ user: { login } }) => login.name);

  return (
    <header className='header'>
      <div className='logo'>
        <p>Emojis Rede</p>
      </div>
      <div className='info'>
        <span>{ selector }</span>
        <button><BsPower /></button>
      </div>
    </header>
  );
}