import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import liste from '../liste.json'

class Liste extends Component {
    render () {
        return (
            <div>
                <Header />
                <div>
                    {liste.map(({id, nom, prenom}) => (
                        <div key={id}>
                        <Link to={`/personne/${id}`}
                            >{prenom} {nom}</Link><br></br>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Liste
