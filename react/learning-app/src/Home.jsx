import './App.css'
import AppHeader from './components/AppHeader'
import AppHero from './components/AppHero'
import CardTitle from './components/CardTitle'
import CardContainer from './components/CardsContainer'
import HappenApp from './components/HappenApp'
import CaseApp from './components/CaseApp'
import Accordion from './components/Accordion'
import TeamGrid from './components/TeamContainerApp'
import TestimonialSlider from './components/Slider'
import Contact from './components/ContactApp'
import AppFooter from './components/AppFooter'
import Amazon from './img/Amazon.png'
import Netflix from './img/Netflix.png'
import Dribble from './img/dribble.png'
import Zoom from './img/ZOOM.png'
import NubSpot from './img/NubSpot.png'
import Notion from './img/Notion.png'

// https://www.figma.com/design/sbD8C5UBpqzRJkQwXRgbUZ/Positivus-Landing-Page-Design--Community-?node-id=330-762&t=kEcTBygOs02ER6m8-0

function App() {

  return (
    <div className='container'>
      <AppHeader />
      <AppHero />
      <div className='Service-Section'>
        <ul>
          <li><img src={Amazon} alt="" /></li>
          <li><img src={Dribble} alt="" /></li>
          <li><img src={NubSpot} alt="" /></li>
          <li><img src={Notion} alt="" /></li>
          <li><img src={Netflix} alt="" /></li>
          <li><img src={Zoom} alt="" /></li>
        </ul>
      </div>
      <CardTitle title="Services" description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" />
      <CardContainer />
      <HappenApp />
      <CardTitle title="Case Studies" description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" />
      <CaseApp />
      <CardTitle title="Our Working Process" description="Step-by-Step Guide to Achieving Your Business Goals" />
      <Accordion />
      <CardTitle title="Team" description="Meet the skilled and experienced team behind our successful digital marketing strategies" />
      <TeamGrid />
      <CardTitle title="Testimonials" description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" />
      <TestimonialSlider />
      <CardTitle title="Contact Us" description="Connect with Us: Let's Discuss Your Digital Marketing Needs" />
      <Contact />
      <AppFooter />
    </div>

  )

}

export default App
