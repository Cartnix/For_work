import './App.css'
import AppHeader from './components/AppHeader'
import AppHero from './components/AppHero'
import CardTitle from './CardTitle'
import CardContainer from './CardsContainer'
import HappenApp from './HappenApp'
import Amazon from './img/Amazon.png'
import Netflix from './img/Netflix.png'
import Dribble from './img/dribble.png'
import Zoom from './img/ZOOM.png'
import NubSpot from './img/NubSpot.png'
import Notion from './img/Notion.png'

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
      <CardTitle title="Services"  description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/ >
      <CardContainer/>
      <HappenApp />
    </div>

  )

}

export default App
