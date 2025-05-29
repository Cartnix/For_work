import Card from "./Card";
import Card1 from "./img/Card1.png";
import Card2 from "./img/Card2.png";
import Card3 from "./img/Card3.png";
import Card4 from "./img/Card4.png";
import Card5 from "./img/Card5.png";
import Card6 from "./img/Card6.png";


const cardsData = [
  { title: 'Search Engine Optimization', imageSrc: Card1 },
  { title: 'Pay-per-click adverstising', imageSrc: Card2 },
  { title: 'Social Media Marketing', imageSrc: Card3 },
  { title: 'Email Marketing', imageSrc: Card4 },
  { title: 'Content Creation', imageSrc: Card5 },
  { title: 'Analytics and Tracking', imageSrc: Card6 },
];

export default function CardContainer(){
    return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        maxWidth: '1600px',
        margin: '0 auto',
        marginTop: '40px',
      }}
    >
      {cardsData.map((card, idx) => (
        <Card
          key={idx}
          title={card.title}
          imageSrc={card.imageSrc}
          ColorIndex={idx}
            
        />
      ))}
    </div>
  );
}