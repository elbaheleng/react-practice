
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './users/pages/Home'
import Auth from './pages/Auth'
import PagenotFound from './pages/PagenotFound'
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import AllBooks from './users/pages/AllBooks'
import Careers from './users/pages/Careers'
import Contact from './users/pages/Contact'

function App() {
  const [isloading, setIsLoading] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(true)
    },1000)

  },[])
  

  return (
    <>
    
    <Routes>
      <Route path='/' element={isloading ? <Home/> : <Preloader/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/all-Books' element={<AllBooks/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/*' element={<PagenotFound/>}/>
    </Routes>
    </>
  )
}

export default App
