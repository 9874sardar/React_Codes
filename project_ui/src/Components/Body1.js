import React from 'react'
import './Body1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faDesktop, faPaperPlane ,faEnvelope,faPhoneAlt,faHome} from '@fortawesome/free-solid-svg-icons'


function Body1() {
    return (
        <div>

<h2>Multi Purpose Theme</h2><br/>
            <p> lorean things are those which i cant access<br />
                here . i know i need to search in google that why exactly i cant . <br />
                but i will do it eventually
            </p><br/>

            <div className="row">
                <div className="column">
                    <div className="card">
                    <h3>Responsive</h3>
                        <center><FontAwesomeIcon className="icon" icon={faHeart} ></FontAwesomeIcon></center>
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                        <center><button>Read more</button></center>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                    <h3 className="card-title">Special title treatment</h3>
                        <center><FontAwesomeIcon className="icon" icon={faDesktop} ></FontAwesomeIcon></center>
                        <p >With supporting text below as a natural lead-in to additional content.</p>
                        <center><button>Read more</button></center>
                    
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                    <h3 className="card-title">Special title treatment</h3>
                       <center> <FontAwesomeIcon className="icon" icon={faPaperPlane} ></FontAwesomeIcon></center>
                        <p >With supporting text below as a natural lead-in to additional content.</p>
                        <center><button>Read more</button></center>
                   </div>
                </div>
            </div>

            <div className="row">
                <div className="column">
                    <div className="card">
                    <h3 className="card-title" id="four">eNno</h3>
                        <p id="lower_section" >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laboriosam ipsa tenetur tempore vitae eum alias culpa iusto explicabo quaerat! Optio 
                        architecto quisquam,</p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                    <h3 className="card-title">Latest Posts</h3>
                        <p id="lower_section" >With supporting text below as <br/><br/>
                        a natural lead-in to additional content.<br/><br/>
                        a natural lead-in to additional content.</p><br/>
                    
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                    <h3 className="card-title">Stay in touch</h3>
                        <p id="lower_section" className="card-text"><FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon>example@gmail.com<br/><br/>
                        <FontAwesomeIcon icon={faPhoneAlt} ></FontAwesomeIcon> +345 578 45416<br/><br/>
                        <FontAwesomeIcon icon={faHome} ></FontAwesomeIcon> Enno | Po Box 2233 sdsdds st 
                        /new York sdadda 23233 USA</p><br/>
                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body1
