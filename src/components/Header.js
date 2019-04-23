import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Header extends Component {
    render () {
        return (
            <div className="bodyHeader">
                <Link to="/">Accueil</Link>
                <Link to="/liste">Liste</Link>
                <Link to="/normal">Normal</Link>
                <Link to="/contact">Contact</Link>
            </div>
        )
    }
}

export default Header