import './articles.css'
import Lookism from "/src/assets/images/lookism.webp"
import WB from "/src/assets/images/windbreaker.webp"
import TOG from "/src/assets/images/towerofgod.jpg"
export default function Articles({stock}) {
    return(
        <>
        <div className='divArticles'>
            <div className='articlesDiv1'>
                <div className='articlesDivImg'>
                    <img className='articlesImg' src={Lookism} alt="" />
                </div>
                
                <div className='articlesDivText'>
                    <h3 className="articlesH3">Lookism</h3>
                    <p className="articlesP">Prix: €14,25  </p>
                    <p className="articlesP2">Stock: 3 {stock} </p>
                    <button className="articlesBtn">Acheter</button>
                </div>
            </div>
            <div className='articlesDiv1'>
                <div className='articlesDivImg'>
                    <img className='articlesImg' src={WB} alt="" />
                </div>
                
                <div className='articlesDivText'>
                    <h3 className="articlesH3">WindBreaker</h3>
                    <p className="articlesP">Prix: €14,25  </p>
                    <p className="articlesP2">Stock: 10 {stock}</p>
                    <button className="articlesBtn">Acheter</button>
                </div>
            </div>
            <div className='articlesDiv1'>
                <div className='articlesDivImg'>
                    <img className='articlesImg' src={TOG} alt="" />
                </div>

                <div className='articlesDivText'>
                    <h3 className="articlesH3">Tower Of God</h3>
                    <p className="articlesP">Prix: €14,25  </p>
                    <p className="articlesP2">Stock: 6 {stock}</p>
                    <button className="articlesBtn">Acheter</button>
                </div>
            </div>
        </div>
        
        
        
        </>
    )
}