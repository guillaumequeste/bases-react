import React, { Component } from 'react'
import Header from './Header'
import liste from '../liste.json'

class Detail extends Component {
    render () {
        const requireImage = () => {
            var liste = require("../liste.json");
            try {
                return require(`../img/${liste[this.props.match.params.id-1].photo}`)
            } catch (err) {
                return require('../img/paint.jpg')
            }
        }

        return (
            <div>
                <Header />
                <div className="fiche">
                    <div className="image">
                        <img src={requireImage(liste[this.props.match.params.id-1].photo)} className="tailleImage" alt={liste[this.props.match.params.id-1].nom}/>
                    </div>
                    <div>
                        <h2>{liste[this.props.match.params.id-1].prenom}</h2>
                        <h2>{liste[this.props.match.params.id-1].nom}</h2>
                        <h3>{liste[this.props.match.params.id-1].age} ans</h3>
                        <h3>{liste[this.props.match.params.id-1].profession}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail