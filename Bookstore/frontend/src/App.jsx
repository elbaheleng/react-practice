
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './users/pages/Home'
import Auth from './pages/Auth'
import PagenotFound from './pages/PagenotFound'
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'

function App() {
  const [isloading, setIsLoading] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(true)
    },3000)

  },[])
  

  return (
    <>
    
    <Routes>
      <Route path='/' element={isloading ? <Home/> : <Preloader/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth/>}/>
      <Route path='/*' element={<PagenotFound/>}/>
    </Routes>
    </>
  )
}

export default App
