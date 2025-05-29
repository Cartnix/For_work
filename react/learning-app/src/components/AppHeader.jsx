import logo from '../img/logo_dark.png'
import '../components/Header.css'

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
          <li>About us</li>
          <li>Services</li>
          <li>Use cases</li>
          <li>Prices</li>
          <li>Blog</li>
          <button className='Button Light-Button'>Request a quote</button>

        </ul>
      </nav>
    </div >
  );
}
