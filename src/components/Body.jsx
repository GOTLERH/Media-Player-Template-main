import '../assets/styles/Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export const Body = () => {
  return (
    <>
    <div className="my-body">
      <a href="#" className="arrow"><FontAwesomeIcon icon={ faAnglesLeft } size="lg" /></a>
      <a href="#" className="play"><FontAwesomeIcon icon={ faCirclePlay }  size="lg" /></a>
      <a href="#" className="arrow"><FontAwesomeIcon icon={ faAnglesRight } size="lg" /></a>
      <a href="#" className="minus"><FontAwesomeIcon icon={ faCircleMinus } size="lg" /></a>
      <a href="#" className="Speaker"><FontAwesomeIcon icon={ faVolumeHigh } size="lg" /></a>
      <a href="#" className="plus"><FontAwesomeIcon icon={ faCirclePlus } size="lg" /></a>    
    </div>
    </>
  )
} 
export default Body;