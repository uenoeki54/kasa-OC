import logofooter from '../assets/logo-footer.png';

function Footer() {
  return (
    <footer>
      <img className="logofooter" src={logofooter} alt="logo Kasa"></img>
      <div className="text-footer">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
