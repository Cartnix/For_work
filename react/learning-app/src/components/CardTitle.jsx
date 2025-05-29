
const GreenBoxStyle = {
    backgroundColor: '#B9FF66', 
    padding: '10px 15px',
    color: '#000',            
    display: 'inline-block',
    borderRadius: '4px',
}

const H2Style = {
    display: 'inline',
    margin: '0',
    textWrap: 'nowrap',
}

export default function CardTitle({ title, description }) {
    return (
        <div style={{ display: 'flex', gap: '40px', width: '60%', marginTop: '80px', alignItems: 'center', }}>
            <div style={GreenBoxStyle}>
                <h2 style={H2Style}>{title}</h2>
            </div>
            <p>{description}</p>
        </div>
    )
}