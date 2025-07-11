// IMPORTS
import { useState } from 'react'
import './App.css'
import Nav from './Components/nav/Nav'
import Articles, { Lookism } from './Components/articles/Articles'
import Panier from './Components/panier/Panier'
import Argent from './Components/argent/Argent'
import Footer from './Components/Footer/Footer'
// FUNCTION
function App() {
  const [argent, setArgent] = useState(100)
  // objet
  const [stocks, setStocks] = useState({
    lookism : 3,
    windbreaker: 10,
    towerofgod: 6
  })
  const [panier, setPanier] = useState({
    lookism: 0,
    windbreaker: 0,
    towerofgod: 0
  })
  const prix = {
    lookism : 14.25,
    windbreaker: 14.25,
    towerofgod: 14.25
  }

  const acheterArticle = (article) =>{
    // [article] permet d'acceder a une propiété de l'objet
    if (stocks[article] > 0 && argent >= prix[article]){
      setStocks({
        // copie de l'objet avec ...
        ...stocks,
        [article]: stocks[article] -1
      })
      setPanier({
        ...panier,
        [article]: panier[article] +1
      })
      setArgent(argent - prix[article])
    }
  }

  const rendreArticle = (article) =>{
    if (panier[article]>0){
      setPanier({
        ...panier,
        [article]: panier[article] -1
      })
       setStocks({
        ...stocks,
        [article]: stocks[article] +1
      })
      setArgent (argent + prix[article])
    }
  }
  return (
    <>
      <Nav/>
      <Articles stocks={stocks} acheterArticle={acheterArticle} prix={prix} />
      <Argent argent={argent}/>
      <Panier panier={panier} rendreArticle={rendreArticle} />
      <Footer/>
    </>
  )
}

export default App
