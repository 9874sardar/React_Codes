import React from 'react'
import './Navbar.css'

function Navbar() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" id="top">eNno</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >

                </button>
                    
                    <span className="navbar-text">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" id="inside" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="inside" href="/">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="inside" href="/">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="inside" href="/">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="inside" href="/">CONTACT</a>
                        </li>
                    </ul>
                    </span>
                </div>
        </nav>
    </>
    )
}

export default Navbar
