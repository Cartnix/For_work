import logo from '../img/logo_Black.png'
import { Link } from 'react-router-dom';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  height: '60px',
  width: '100%',
};

const navListStyle = {
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  gap: '50px',
};


export default function AppHeader() {
  return (
    <div style={headerStyle}>
      <div>
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul style={navListStyle}>
          <li><Link to="/">About us</Link></li>
          <li><Link to="/portfolio">Services</Link></li>
          <li><Link to="/contacts">Use cases</Link></li>
          <li><Link to="/prices">Prices</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li>
            <button
              className="Button Light-Button"
              style={{ padding: '12px 24px', minWidth: '150px' }}
            >
              Request a quote
            </button>
          </li>
        </ul>
      </nav>
    </div >
  );
}
