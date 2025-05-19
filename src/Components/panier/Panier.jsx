// IMPORTS
import { useState } from "react";
import './panier.css'
import { Lookism, TOG, WB } from "../articles/Articles";

// FUNCTION
export default function Panier({panier, rendreArticle}) {
    return(
        <>
        <div className="divPanier">
            <div className="panierDiv1">
                <h2 className="panierDiv1H2">Mon Panier:</h2>
            </div>
            <div className="panierDiv2">
                {/* EVALUATION CONDITIONNELLE, SI CONDITION VRAIE EXECUTE L'ACTION */}
                {panier.lookism > 0 && (
                    <div className="panierDiv3">
                        <img className="panierImg" src={Lookism} alt="lookism" />
                        <p className="panierP">Manhwa de Lookism: {panier.lookism}</p>
                        <button className="panierBtn" onClick={() => rendreArticle("lookism")}>Rendre</button>
                    </div>
                )}
                {panier.windbreaker > 0 &&(
                    <div className="panierDiv3">
                        <img className="panierImg" src={WB} alt="windbreaker" />
                        <p className="panierP">Manhwa de WindBreaker:  {panier.windbreaker} </p>
                        <button className="panierBtn" onClick={()=> rendreArticle("windbreaker")} >Rendre</button>
                    </div>
                )}
                {panier.towerofgod > 0 &&(
                    <div className="panierDiv3">
                        <img className="panierImg" src={TOG} alt="tower of god" />
                        <p className="panierP">Manhwa de TowerOfGod:  {panier.towerofgod} </p>
                        <button className="panierBtn" onClick={()=> rendreArticle("towerofgod")} disabled={panier.towerofgod ===0}>Rendre</button>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}