import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrolltotop'
import Home from './pages/home'
import About from './pages/about'
import Guide from './pages/guide'
import Help from './pages/help'

const App = () => {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/guide' element={<Guide />} />
        <Route path='/help' element={<Help />} />
      </Routes>
  </Router>
  )
}

export default App

