import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


export default function Foter() {
   
    return (
        <>
            <div className="phead">
                <h1>Let's Connect</h1>
            </div>
            <div className="main-foot bg-dark" id='Footer' >
                <div className="foot-about">
                    <h2>CineCraft </h2>
                </div>
                <div className="bMenu">
                    <ul className='bMList'>
                        <a className="nav-link active" href="#navbar" >Cinematography</a>
                        <a className="nav-link active" aria-current="page" href="#about" >Movie Making</a>
                        <a className="nav-link active" aria-current="page" href="#skill">Screenplay Writing</a>

                    </ul>
                </div>
                <div className="bMenu">
                    <ul className='bMList'>
                        <a className="nav-link active" href="#navbar" >Home</a>
                        <a className="nav-link active" aria-current="page" href="#about" >About Us</a>
                        <a className="nav-link active" aria-current="page" href="#skill">Courses</a>
                        
                    </ul>
                </div>
                <div className="footer">
                    <ul>
                        <div className="github">
                            <a href="https://www.facebook.com/people/Cine-Craft/pfbid02gmGcaZpqCaAp6okesj8KyBRcFTB2Po6fcTp8iXV72FfFcW8c1qBxXpkxXh9wFBBDl/?mibextid=ZbWKwL">
                                <FontAwesomeIcon className='gmail' icon={faFacebook} beatFade />
                            </a>
                        </div>
                        <div className="insta">
                            <a href="https://www.instagram.com/cinecraft_007">
                                <FontAwesomeIcon className='gmail' icon={faInstagram} beatFade />
                            </a>
                        </div>
                        <div className="gmaild">
                            <a href="https://twitter.com/Cinecraft_007">
                                <FontAwesomeIcon className='gmail' icon={faXTwitter} beatFade />
                            </a>
                        </div>

                    </ul>
                </div>
            </div>
            
        </>
    )
}