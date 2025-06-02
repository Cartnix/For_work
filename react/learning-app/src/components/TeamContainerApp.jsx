import TeamApp from "./TeamApp";
import Mask1 from "../img/Mask1.png";
import Mask2 from "../img/Mask2.png";
import Mask3 from "../img/Mask3.png";




const TeamData = [
    { name: 'John Smidth', title: 'CEO and founder', description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy', ImageSrc: Mask1 },
    { name: 'Jane Doe', title: 'Director of operations', description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills', ImageSrc: Mask2 },
    { name: 'Michael Brown', title: 'Senior SEO Specialist', description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization', ImageSrc: Mask3 },
    { name: 'John Smidth', title: 'CEO and founder', description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy', ImageSrc: Mask1 },
    { name: 'Jane Doe', title: 'Director of operations', description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills', ImageSrc: Mask2 },
    { name: 'Michael Brown', title: 'Senior SEO Specialist', description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization', ImageSrc: Mask3 }
]


export default function TeamGrid() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            marginTop: '40px',
        }}>
            {TeamData.map((person, index) => (
                <TeamApp
                    key={index}
                    name={person.name}
                    title={person.title}
                    description={person.description}
                    ImageSrc={person.ImageSrc}
                />
            ))}
        </div>
    )
}