import { useState } from "react";
import './panier.css'
import { Lookism, TOG, WB } from "../articles/Articles";
export default function Panier({panier, rendreArticle}) {
    return(
        <>
        <div className="divPanier">
            <div className="panierDiv1">
                <h2 className="panierDiv1H2">Mon Panier:</h2>
            </div>
            <div className="panierDiv2">
                <div className="panierDiv3">
                    <img className="panierImg" src={Lookism} alt="lookism" />
                    <p className="panierP">Manhwa de Looksim: {panier.lookism} </p>
                    <button className="panierBtn" onClick={()=> rendreArticle("lookism")} disabled={panier.lookism ===0}>Rendre</button>
                </div>
                <div className="panierDiv3">
                    <img className="panierImg" src={WB} alt="windbreaker" />
                    <p className="panierP">Manhwa de WindBreaker:  {panier.windbreaker} </p>
                    <button className="panierBtn" onClick={()=> rendreArticle("windbreaker")} disabled={panier.windbreaker ===0}>Rendre</button>
                </div>
                <div className="panierDiv3">
                    <img className="panierImg" src={TOG} alt="tower of god" />
                    <p className="panierP">Manhwa de TowerOfGod:  {panier.towerofgod} </p>
                    <button className="panierBtn" onClick={()=> rendreArticle("towerofgod")} disabled={panier.towerofgod ===0}>Rendre</button>
                </div>
            </div>
        </div>
        </>
    )
}