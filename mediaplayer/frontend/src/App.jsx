import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'

function App() {
 

  return (
    <>
     <Header/>
     {/*path for components*/}
     <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path='/watchhistory' element={<Watchhistory />} />
     </Routes>
     <Footer/>
    </> 
  )
}

export default App
