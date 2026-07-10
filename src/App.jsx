import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'    
import Education from './components/Education'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
// import Resume from './components/Resume'


function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/education' element={<Education/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/certifications' element={<Certifications/>} />
          {/* <Route path='/resume' element={<Resume/>} /> */}
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
