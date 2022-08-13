import React from 'react'
//import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faDesktop} from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer className ="bg-info text-center text-white">
            <div className=" p">
                © eNno Theme. All Rights Reserved<br />
                Designed by BootstrapMade
            </div>
            <div class="container p-2">
            <section className="mb-2">
            
      <a className="btn btn-outline-light btn-floating m-1" href="/" role="button">
          <FontAwesomeIcon className="icon" icon={faHeart} ></FontAwesomeIcon>
      </a>


      <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
        ><FontAwesomeIcon className="icon" icon={faHeart} ></FontAwesomeIcon></a>


      <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
        ><FontAwesomeIcon className="icon" icon={faHeart} ></FontAwesomeIcon></a>


      <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
        ><FontAwesomeIcon className="icon" icon={faHeart} ></FontAwesomeIcon></a>


      <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
        ><FontAwesomeIcon className="icon" icon={faHeart} ></FontAwesomeIcon></a>


      <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
        ><FontAwesomeIcon className="icon" icon={faDesktop} ></FontAwesomeIcon></a>
    </section>
        </div>
        </footer>
    )
}

export default Footer
