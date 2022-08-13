import React from 'react'
import './Footer1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faDesktop } from '@fortawesome/free-solid-svg-icons'

function Footer1() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <br/><br/><p className="copyright-text"> © eNno Theme. All Rights Reserved<br />
                Designed by BootstrapMade
                            
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a href="/"> <FontAwesomeIcon className="icon" icon={faHeart} ></FontAwesomeIcon></a></li>
                            <li><a href="/"><FontAwesomeIcon className="icon" icon={faDesktop} ></FontAwesomeIcon></a></li>
                           </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer1
