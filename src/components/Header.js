import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class Header extends Component {
    render () {
        return (
            <div className="bodyHeader">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">Accueil</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/liste">Liste</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/normal">Normal</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/toggle">Toggle</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/lb">Lightbox</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/hooks">Hooks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/infos">Infos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/api">API</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header