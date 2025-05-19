// IMPORTS
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

// FUNCTION
export default function Footer() {
    return(
        <>
        <div className='divFooter'>
            <p className='footerP'>Copyright &copy; Arthur Van Roost</p>
            <div className='footerDiv'>
                <FontAwesomeIcon className='navDiv3FA' icon={faFacebookF} />
                <FontAwesomeIcon className='navDiv3FA' icon={faInstagram} />
                <FontAwesomeIcon className='navDiv3FA' icon={faTwitter} />
                <FontAwesomeIcon className='navDiv3FA' icon={faGithub} />
            </div>
            
        </div>
        </>
    )
}