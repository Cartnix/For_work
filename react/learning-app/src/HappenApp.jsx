import HappenPng from './img/Happen.png'

const HappenStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: '20px',
    marginTop: '80px',
    padding: '20px',
}

const HappenTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '250px',
    width: '50%',
}

export default function HappenApp() {
    return (
        <div  style={HappenStyle}>
            <div style={HappenTextStyle}>
                <h2>Let’s make things happen</h2>
                <span>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online</span>
                <button>Get your free proposal</button>
            </div>
            <div>
                <img src={HappenPng} alt="" />
            </div>
        </div>
    )
}