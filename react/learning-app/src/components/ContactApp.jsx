import ContactPic from "../img/contact_pic.png"
import { useState } from "react"

export default function Contact() {
    // const [Method, setMethod] = useState('hi');
    return (
        <div style={{ backgroundColor: '#F3F3F3', borderRadius: '20px', marginTop: '40px', padding: '30px 60px', display: 'flex', overflow: 'hidden', alignItems: 'center' }}>
            <div style={{ width: '50%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span>Name</span>
                    <input type="text" placeholder="Name" style={{ borderRadius: '10px', marginBottom: '10px', padding: '10px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span>Email</span>
                    <input type="Email" placeholder="Email" style={{ borderRadius: '10px', marginBottom: '10px', padding: '10px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span>Message</span>
                    <textarea rows={7} style={{ borderRadius: '10px', marginBottom: '10px', padding: '10px' }} placeholder="Message" />
                </div>
                <button className="Dark-Button" style={{ width: '100%', marginTop: '10px' }}>Send Message</button>
            </div>
            <div style={{ width: '50%'}}>
                <img
                    src={ContactPic}
                    alt="Contact"
                    style={{
                        transform: 'translateX(250px)',
                        height: '100%',
                    }}
                />
            </div>
        </div>
    )
}