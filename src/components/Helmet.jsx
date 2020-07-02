import React, { Component } from 'react'
import {Helmet} from "react-helmet"

class HelmetComponent extends Component {
  
    render () {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.title}</title>
                    <link rel="canonical" href={this.props.link} />
                    <meta name="keywords" content="Guillaume Queste developpeur web portfolio projet bases react" />
                    <meta name="description" content="Bases de la librairie React." />
                    <meta property="og:title" content="Projet Bases React" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https:/www.guillaumequeste.fr" />
                    <meta property="og:image" content="http://www.guillaumequeste.fr/img/histoire.png" />
                    <meta property="og:locale" content="fr_FR" />
                    <meta property="og:title" content="Projet Bases React" />
                    <meta property="og:description" content="Bases de la librairie React." />
                    <meta property="og:site_name" content="Projet Bases React" />
                    <meta name="twitter:description" content="Bases de la librairie React." />
                    <meta name="twitter:title" content="Projet Bases React" />
                    <meta name="twitter:image" content="http://www.guillaumequeste.fr/img/histoire.png" />
                </Helmet>
            </div>
        )
    }
}

export default HelmetComponent