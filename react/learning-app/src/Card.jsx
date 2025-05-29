export default function Card({ title, imageSrc, ColorIndex }) {
    const colors = ['#F3F3F3', '#B9FF66', '#191A23'];
    const CardStyle = {
        backgroundColor: colors[ColorIndex % colors.length],
        color: colors[ColorIndex % colors.length] === '#191A23' ? '#fff' : '#000',
        borderRadius: '20px',
        padding: '25px 40px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid #000',
    };

    const imgStyle = {
        maxWidth: '40%',
        height: 'auto',
        marginTop: '10px',
    };

    const cardTitleStyle = {
        fontSize: '25px',
        width: '35%',
    }

    return (
        <div style={CardStyle}>
            <h3 style={cardTitleStyle}>{title}</h3>
            <img src={imageSrc} alt="" style={imgStyle}/>
        </div>
    )

}