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
    <main className="my-body">
    <section>
      <article className="album">
        <img src="#" alt="Picture" />
        <h2>Artist</h2>
        <h2>Album</h2>
        <h2>Song's name.</h2>
      </article>
      <article className="song">
        <h3>-------Aquí va el timing de la canción.------</h3>
      </article>
      <article className="mediaIco1">
        <a href="#" className="arrow"><FontAwesomeIcon icon={ faAnglesLeft } size="3x" /></a>
        <a href="#" className="play"><FontAwesomeIcon icon={ faCirclePlay }  size="4x" /></a>
        <a href="#" className="arrow"><FontAwesomeIcon icon={ faAnglesRight } size="3x" /></a>
      </article>
      <article className="mediaIco2">
        <a href="#" className="minus"><FontAwesomeIcon icon={ faCircleMinus } size="3x" /></a>
        <a href="#" className="Speaker"><FontAwesomeIcon icon={ faVolumeHigh } size="3x" /></a>
        <a href="#" className="plus"><FontAwesomeIcon icon={ faCirclePlus } size="3x" /></a> 
      </article>
      </section>
    </main>
    </>
  )
} 
export default Body;