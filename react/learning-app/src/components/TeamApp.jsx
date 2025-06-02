export default function TeamApp({ name, title, description, ImageSrc }) {
    const Teamstyle = {
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '25px 40px',
        boxShadow: '0 8px 0 rgba(0, 0, 0, 0.45)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #000',
        width: '30%',
        marginBottom: '20px',
    }

    const imageStyle = {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        background: '#000',
    }

    return (
        <div style={Teamstyle}>
            <div style={{display: 'flex', marginBottom: '20px', alignItems: 'center', gap: '20px'}}>
                <img src={ImageSrc} alt="" style={imageStyle}/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span>{name}</span>
                    <span>{title}</span>
                </div>
            </div>
            <p style={{borderTop: '1px solid #000', paddingTop: '30px', alignSelf: 'center'}}>{description}</p>
        </div>
    )
}