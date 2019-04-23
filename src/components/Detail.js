import React, { Component } from 'react'
import Header from './Header'


const personnes = {
   1: { 
        nom: "Lenoir",
        prenom: "André",
        photo: "andre.png",
        age: "68",
        profession: "Agent",
    },
    2: { 
        nom: "Legris",
        prenom: "Michel",
        photo: "michel.png",
        age: "47",
        profession: "Pompier",
    },
    3: { 
        nom: "Maréchal",
        prenom: "Denis",
        photo: "denis.png",
        age: "54",
        profession: "Policier",
    }
}

class Detail extends Component {
    render () {
        const requireImage = () => {
            try {
                return require(`../img/${personnes[this.props.match.params.id].photo}`)
            } catch (err) {
                return require('../img/paint.jpg')
            }
        }
        return (
            <div>
                <Header />
                <div className="fiche">
                    <div className="image">
                        <img src={requireImage(personnes[this.props.match.params.id].photo)} className="tailleImage" alt={this.props.match.params.nom}/>
                    </div>
                    <div>
                        <h2>{personnes[this.props.match.params.id].prenom}</h2>
                        <h2>{personnes[this.props.match.params.id].nom}</h2>
                        <h3>{personnes[this.props.match.params.id].age} ans</h3>
                        <h3>{personnes[this.props.match.params.id].profession}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail