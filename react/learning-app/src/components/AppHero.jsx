import HeroImg from '../img/HeroPng.png'

const infoHeroStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '70vh',
    width: '45%',
}
const AppHeroStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '50px',
}
export default function AppHero() {
    return (
        <div style={AppHeroStyle}>
            <div style={infoHeroStyle}>
                <h1>Navigating the digital landscape for success</h1>
                <span>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</span>
                <button className="Dark-Button">Book a consultation</button>
            </div>
            <div className="imageHero">
                <img src={HeroImg} alt="" />
            </div>
        </div>
    )
}