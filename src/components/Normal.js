import React, { Component } from 'react'
import Header from './Header'
import Helmet from './Helmet'

class Normal extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Normal bases React"}
                        link={"https://www.guillaumequeste.fr"} />
                <Header />
                <h2>Normal works</h2>
            </div>
        )
    }
}

export default Normal