
import '../assets/styles/Header.css';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Header = () => {
  return (
    <>
    <div className="my-header">
    <span>
      <FontAwesomeIcon icon={faSpotify} className="icono" />
    </span>  
    </div>
    </>
  )
}
export default Header;