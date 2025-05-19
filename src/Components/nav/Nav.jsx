import './nav.css'
import Logo from "/src/assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';
export default function Nav() {
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
                <FontAwesomeIcon className='navDiv3FA' icon={faFacebookF} />
                <FontAwesomeIcon className='navDiv3FA' icon={faInstagram} />
                <FontAwesomeIcon className='navDiv3FA' icon={faTwitter} />
                <FontAwesomeIcon className='navDiv3FA' icon={faPinterestP} />
            </div>
        </div>
        </>
    )
}