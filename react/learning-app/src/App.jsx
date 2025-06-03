import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './Home'
import Portfolio from './Portfolio'
import Contacts from './Contactsss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  )
}

export default App
