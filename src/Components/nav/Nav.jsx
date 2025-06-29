// IMPORTS
import './nav.css'
import Logo from "/src/assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

// FUNCTION
export default function Nav({panier}) {
    return(
        <>
        <div className='divNav'>
            <div className='navDiv1'>
                <img className='navDiv1Img' src={Logo} alt="logo e-shop" />
            </div>
            <div className='navDiv2'>
                <p className='navDiv2P1'>Boutique</p>
                <p className='navDiv2P2'>À propos</p>
                <p className='navDiv2P2'>FAQ</p>
                <p className='navDiv2P2'>Contact</p>
            </div>
            <div className='navDiv3'>
                
                <div className='navDiv4' >
                    <FontAwesomeIcon className='navDiv3FA2' icon={faCartShopping} />
                    <p>{panier} </p>
                </div>
                
            </div>
        </div>
        </>
    )
}