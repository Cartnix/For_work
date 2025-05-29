export default function AccordionItem({ index, title, description, isActive, onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                backgroundColor: isActive ? '#B9FF66' : '#f3f3f3',
                borderRadius: '20px',
                border: '1px solid #000',
                boxShadow: '0 8px 0 rgba(0, 0, 0, 0.45)',
                padding: '20px',
                marginBottom: '20px',
                cursor: 'pointer',
                transition: 'all 0.4s ease-in-out',
                width: '100%'
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <strong style={{ fontSize: '30px' }}>{`0${index + 1}`}</strong> <span style={{ marginLeft: '10px', fontWeight: '700' }}>{title}</span>
                </div>
                <div style={{ borderRadius: '100%', width: '25px', height: '25px', backgroundColor: '#fff', border: '1px solid #000', textAlign: 'center' }}>
                    <div style={{ fontSize: '20px', fontWeight: '700'}}>{isActive ? '−' : '+'}</div>
                </div>
            </div>
            {isActive && (
                <p style={{ marginTop: '20px', lineHeight: '1.4' , borderTop: '1px solid #000', paddingTop: '20px' }}>{description}</p>
            )}
        </div>
    )
}