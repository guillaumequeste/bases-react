import React, { Component } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'

export default class Carte extends Component {
    state = {
        lat: 49.9,
        lng: 1.1,
        zoom: 11,
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        const dieppe = [49.9246182, 1.0791444]
        return (
            <div className="bodyMap">
                <div className="map">
                    <Map center={position} zoom={this.state.zoom}>
                        <TileLayer
                            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={dieppe}>
                           
                                <div>Dieppe</div>
                           
                        </Marker>
                    </Map>
                </div>
            </div>
        )
    }
}
