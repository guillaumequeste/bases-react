import React, { Component } from 'react'
import Header from './Header'
import Helmet from './Helmet'

class NotFound extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Not Found bases React"}
                        link={"https://www.guillaumequeste.fr"} />
                <Header />
                <h2>404 Not Found</h2>
            </div>
        )
    }
}

export default NotFound