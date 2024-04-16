import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container-fluid'>
        <Navbar/>
        <ItemListContainer saludo={"Recibi tus plantas en casa! Envios en gran Rosario Gratis"}></ItemListContainer>
      </div>
     
    </>
  )
}

export default App
