import './articles.css'
import Lookism from "/src/assets/images/lookism.webp"
import WB from "/src/assets/images/windbreaker.webp"
import TOG from "/src/assets/images/towerofgod.jpg"
export default function Articles() {
    return(
        <>
        <div className='divArticles'>
            <div className='articlesDiv1'>
                <div className='articlesDivImg'>
                    <img className='articlesImg' src={Lookism} alt="" />
                </div>
                
                <div className='articlesDivText'>
                    <h3>Lookism</h3>
                    <p>Prix: €14,25</p>
                    <p>Stock: 3</p>
                    <button>Acheter</button>
                </div>
            </div>
            <div className='articlesDiv1'>
                <div className='articlesDivImg'>
                    <img className='articlesImg' src={WB} alt="" />
                </div>
                
                <div className='articlesDivText'>
                    <h3>WindBreaker</h3>
                    <p>Prix: €14,25</p>
                    <p>Stock: 10</p>
                    <button>Acheter</button>
                </div>
            </div>
            <div className='articlesDiv1'>
                <div className='articlesDivImg'>
                    <img className='articlesImg' src={TOG} alt="" />
                </div>

                <div className='articlesDivText'>
                    <h3>Tower Of God</h3>
                    <p>Prix: €14,25</p>
                    <p>Stock: 6</p>
                    <button>Acheter</button>
                </div>
            </div>
        </div>
        
        
        
        </>
    )
}