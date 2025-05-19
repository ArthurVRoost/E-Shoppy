import './articles.css'
import Lookism from "/src/assets/images/lookism.webp"
import WB from "/src/assets/images/windbreaker.webp"
import TOG from "/src/assets/images/towerofgod.jpg"
export default function Articles() {
    return(
        <>
        <div>
            <div>
                <img className='articlesImg' src={Lookism} alt="" />
            </div>
            <div>
                <img className='articlesImg' src={WB} alt="" />
            </div>
            <div>
                <img className='articlesImg' src={TOG} alt="" />
            </div>
        </div>
        
        
        
        </>
    )
}