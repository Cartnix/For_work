import line from '../img/Line_3.png'
import Arrow from '../img/Case_arrow.png'
const MainCardStyle = {
    padding: '20px',
    backgroundColor: '#191A23',
    borderRadius: '20px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '60px',
    marginTop: '40px',
}
const BlockStyle = {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
}
const LinkStyle = {
    display: 'flex',
    gap: '10px',
}

export default function CaseApp() {
    return (
        <div style={MainCardStyle}>
            <div style={BlockStyle}>
                <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                <div style={LinkStyle}>
                    <a href="#" style={{
                        textDecorationLine: 'none', color: '#B9FF66',
                    }}>Learn more</a>
                    <img src={Arrow} alt="" />
                </div>
            </div>

            <img src={line} alt="" />

            <div style={BlockStyle}>
                <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                <div style={LinkStyle}>
                    <a href="#" style={{
                        textDecorationLine: 'none', color: '#B9FF66',
                    }}>Learn more</a>
                    <img src={Arrow} alt="" />
                </div>
            </div>

            <img src={line} alt="" />

            <div style={BlockStyle}>
                <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                <div style={LinkStyle}>
                    <a href="#" style={{
                        textDecorationLine: 'none', color: '#B9FF66',
                    }}>Learn more</a>
                    <img src={Arrow} alt="" />
                </div>
            </div>
        </div>
    )
}