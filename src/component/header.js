import React from "react";

import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Travelix<span>Travel Agency</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><NavLink to="/" className={({isActive}) => isActive ? "nav-link active-nav-link" : "nav-link"}>Home</NavLink></li>
                            <li className="nav-item"><NavLink to="/about"className={({isActive}) => isActive ? "nav-link active-nav-link" : "nav-link"}>About</NavLink></li>
                            <li className="nav-item"><NavLink to="/destination"className= {({isActive}) => isActive ? "nav-link active-nav-link" : "nav-link"}>Destination</NavLink></li>
                            <li className="nav-item"><NavLink to="/hotel"className={({isActive}) => isActive ? "nav-link active-nav-link" : "nav-link"}>Hotel</NavLink></li>
                            <li className="nav-item"><NavLink to="/contact"className={({isActive}) => isActive ? "nav-link active-nav-link" : "nav-link"}>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default HeaderComponent;