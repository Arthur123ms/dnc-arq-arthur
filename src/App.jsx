import { useContext } from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

//PAGES
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'


// UTILS
import ScrolltoTop from './utils/ScroollTop'
import { AppContext } from './contexts/AppContext'

function App () {
  const appContext = useContext(AppContext)

  if(appContext.loading) {
    return <LoadingSpinner />
  }

  return (
    <Router>
      <ScrolltoTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App
