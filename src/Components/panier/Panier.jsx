import { useState } from "react";
import './panier.css'
import { Lookism, TOG, WB } from "../articles/Articles";
export default function Panier({count}) {
    return(
        <>
        <div className="divPanier">
            <div className="panierDiv1">
                <h2 className="panierDiv1H2">Mon Panier:</h2>
            </div>
            <div className="panierDiv2">
                <div className="panierDiv3">
                    <img className="panierImg" src={Lookism} alt="lookism" />
                    <p className="panierP">Manhwa de Looksim: 0 {count} </p>
                    <button className="panierBtn">Rendre</button>
                </div>
                <div className="panierDiv3">
                    <img className="panierImg" src={WB} alt="windbreaker" />
                    <p className="panierP">Manhwa de WindBreaker: 0 {count} </p>
                    <button className="panierBtn">Rendre</button>
                </div>
                <div className="panierDiv3">
                    <img className="panierImg" src={TOG} alt="tower of god" />
                    <p className="panierP">Manhwa de TowerOfGod: 0 {count} </p>
                    <button className="panierBtn">Rendre</button>
                </div>
            </div>
        </div>
        </>
    )
}