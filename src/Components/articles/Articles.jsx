import './articles.css'
import Lookism from "/src/assets/images/lookism.webp"
import WB from "/src/assets/images/windbreaker.webp"
import TOG from "/src/assets/images/towerofgod.jpg"
import { useState } from 'react'
export {Lookism}
export {WB}
export {TOG}
export default function Articles({stocks, acheterArticle, prix}) {
    return(
        <>
        <div className='divArticles'>
            <div className='articlesDiv1'>
                <div className='articlesDivImg'>
                    <img className='articlesImg' src={Lookism} alt="" />
                </div>
                
                <div className='articlesDivText'>
                    <h3 className="articlesH3">Lookism</h3>
                    <p className="articlesP">Prix: €{prix.lookism.toFixed(2)}  </p>
                    <p className={`articlesP2 ${stocks.lookism === 0 ? 'stock-red' : stocks.lookism === 1 ? 'stock-orange' : ''}`}>
                        Stock: {stocks.lookism}
                    </p>
                    <button className="articlesBtn" onClick={()=> acheterArticle("lookism")} disabled={stocks.lookism === 0} >Acheter</button>
                </div>
            </div>
            <div className='articlesDiv1'>
                <div className='articlesDivImg'>
                    <img className='articlesImg' src={WB} alt="" />
                </div>
                
                <div className='articlesDivText'>
                    <h3 className="articlesH3">WindBreaker</h3>
                    <p className="articlesP">Prix: €{prix.windbreaker.toFixed(2)}  </p>
                    <p className={`articlesP2 ${stocks.windbreaker === 0 ? 'stock-red' : stocks.windbreaker === 1 ? 'stock-orange' : ''}`}>
                        Stock: {stocks.windbreaker}
                    </p>
                    <button className="articlesBtn" onClick={()=> acheterArticle("windbreaker")} disabled={stocks.windbreaker === 0} >Acheter</button>
                </div>
            </div>
            <div className='articlesDiv1'>
                <div className='articlesDivImg'>
                    <img className='articlesImg' src={TOG} alt="" />
                </div>

                <div className='articlesDivText'>
                    <h3 className="articlesH3">Tower Of God</h3>
                    <p className="articlesP">Prix: €{prix.towerofgod.toFixed(2)}  </p>
                    <p className={`articlesP2 ${stocks.towerofgod === 0 ? 'stock-red' : stocks.towerofgod === 1 ? 'stock-orange' : ''}`}>
                        Stock: {stocks.towerofgod}
                    </p>
                    <button className="articlesBtn" onClick={()=> acheterArticle("towerofgod")} disabled={stocks.towerofgod === 0} >Acheter</button>
                </div>
            </div>
        </div>
        
        
        
        </>
    )
}