import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import Footer from "./assets/components/Footer"
import Display from "./assets/components/Display"
import Input from './assets/components/Input'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Input />
    <Display/>
    <Footer/>
      
    </>
  )
}

export default App
