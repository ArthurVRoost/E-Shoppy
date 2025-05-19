import { useState } from 'react'
import './App.css'
import Nav from './Components/nav/Nav'
import Articles from './Components/articles/Articles'
import Panier from './Components/panier/Panier'
import Argent from './Components/argent/Argent'

function App() {
  

  return (
    <>
      <Nav/>
      <Articles/>
      <Argent/>
      <Panier/>
    </>
  )
}

export default App
