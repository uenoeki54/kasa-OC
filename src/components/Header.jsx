import { Link } from 'react-router-dom';
import biglogo from '../assets/biglogo.png';

function Header() {
  return (
    <header>
      <img className="biglogo" src={biglogo} alt="logo Kasa"></img>
      <nav>
        <Link to="/"> Accueil </Link>
        <Link to="/apropos"> A propos </Link>
      </nav>
    </header>
  );
}

export default Header;
