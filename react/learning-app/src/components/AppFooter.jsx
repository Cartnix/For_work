import FooterLogo from '../img/Logo_White.png'
import Icon1 from '../img/Icon1.png'
import Icon2 from '../img/Icon2.png'
import Icon3 from '../img/Icon3.png'


export default function AppFooter() {
    return (
        <footer style={{
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            backgroundColor: '#191A23',
            padding: '40px',
            marginTop: '40px',
        }}>
            <div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <img src={FooterLogo} alt="" />
                    <ul style={{listStyleL: 'none', color: '#fff', display: 'flex', gap: '20px'}}>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Use cases</li>
                        <li>Prices</li>
                        <li>Blog</li>
                    </ul>
                    <div style={{gap: '10px', display: 'flex'}}>
                        <img src={Icon1} alt="LinkedIn" />
                        <img src={Icon2} alt="FaceBook" />
                        <img src={Icon3} alt="Twitter" />
                    </div>
                </div>
            </div>

            <div style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    
                </div>
                <div></div>
            </div>

            <div>

            </div>
        </footer>
    )
}