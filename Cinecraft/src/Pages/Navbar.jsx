import React from "react";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../images/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NAvbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black well" id='navbar'>
                <div className="container-fluid">
                    <FontAwesomeIcon icon={faBars} bounce style={{
                        color: "black"
                    }} className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="site-title" style={{
                        marginRight: "50px"
                    }} >
                        <img className="nav-img" src={logo} alt="" srcset="" />
                        CineCraft
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{
                            fontSize: "large", paddingLeft: "50px"
                        }} >
                            <li className="nav-item" style={{
                                fontSize: "large"
                            }}  >
                                <a className="nav-link active" aria-current="page" href="#home" style={{
                                    color: "black",
                                    fontSize: '22px'
                                }} >Home</a>
                            </li>
                            <li className="nav-item" style={{
                                fontSize: "large"
                            }}  >
                                <a className="nav-link active" aria-current="page" href="#about" style={{
                                    color: "black",
                                    fontSize: '22px'
                                }}  >About Us</a>
                            </li>
                            <li className="nav-item" style={{
                                fontSize: "large"
                            }}  >
                                <a className="nav-link active" aria-current="page" href="#courses" style={{
                                    color: "black",
                                    fontSize: '22px'

                                }}  >Courses</a>
                            </li>
                            <li className="nav-item" style={{
                                fontSize: "large"
                            }}  >
                                <a className="nav-link active" aria-current="page" href="#Footer" style={{
                                    color: "black",
                                    fontSize: '22px',
                                    paddingRight: "420px"
                                }}  >Connect </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default NAvbar;