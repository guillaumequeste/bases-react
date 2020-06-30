import React, { Component } from 'react'
import Header from './Header'
import Carte from './Carte'
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

class Infos extends Component {
  
    render () {
        return (
            <div>
                <Header />
                <div className="infos">
                    <div className="divInfos">
                        <p>Adresse</p>
                        <p>N° téléphone</p>
                        <Carte />
                    </div>
                </div>
            </div>
        )
    }
}

export default Infos