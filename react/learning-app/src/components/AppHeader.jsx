import logo from '../img/logo_Black.png'

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
          <li><a href="#">
            About us
            </a></li>
          <li><a href="#">
            Services
            </a></li>
          <li><a href="#">
            Use cases
            </a></li>
          <li><a href="#">
            Prices
            </a></li>
          <li><a href="#">
            Blog
            </a></li>
          <button className='Button Light-Button'>Request a quote</button>

        </ul>
      </nav>
    </div >
  );
}
