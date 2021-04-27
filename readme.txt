1) créer application
2) ajouter bootstrap
3) ajouter animate.css
4) ajouter react-reveal
5) ajouter react anchor link smmooth scroll
6) envoyer un mail via EmailJS
7) yarn build
8) SEO (react-helmet)
8') Ajout favicon
9) ancienne version 'Detail.js'
10) redirect react-router et .htaccess
11) lightbox
12) carte (leaflet react-leaflet)
13) scroll to top when navigating
14) apparition / disparition texte


1) Si 'npx create-react-app myapp' n'installe pas public, src, scripts, faire :
yarn create react-app myapp
yarn start


2) Ajouter bootstrap :
    - yarn add bootstrap
    - yarn add jquery popper.js
    - src/index.js :
        - import 'bootstrap/dist/css/bootstrap.min.css'
        - import $ from 'jquery'
        - import Popper from 'popper.js'
        - import 'bootstrap/dist/js/bootstrap.bundle.min'
    - lorsqu'on l'utilise, il faut fermer la balise input : <input>...</input>


3) Ajouter animate.css :
    - yarn add animate.css
    - src/index.js :
        - import "animate.css/animate.min.css"
    - dans le fichier voulu (ex : App.js) :
        - <div className="animated flash delay-2s">Example</div>


4) Ajouter react-reveal :
    - yarn add react-reveal
    - dans le fichier voulu (ex : App.js) :
        - import Zoom from 'react-reveal/Zoom'
        - <Zoom>
            <p>Markup that will be revealed on scroll</p>
          </Zoom>


5) Ajouter react anchor link smooth scroll :
    - yarn add react-anchor-link-smooth-scroll
    - dans le fichier voulu (ex : App.js) :
        - import AnchorLink from 'react-anchor-link-smooth-scroll'
        - <AnchorLink href='#things'>Things</AnchorLink>
          <AnchorLink href='#stuff'>Stuff</AnchorLink>
                    .
                    .
                    .
         <section id='things'>
            <h2>Things</h2>
         </section>
         <section id='stuff'>
            <h2>Stuff</h2>
         </section>


6) Envoyer un email via EmailJS :
    - créer un compte emailjs et sélectionner la messagerie utilisée (ici gmail, synchronisation compte gmail->emailjs), puis créer un email template :

        Subject
        Nouveau message de {{prenom}} {{nom}}

        Vous avez un nouveau message de {{prenom}} {{nom}}:
        {{{message}}}
        {{email}}
        {{telephone}} 

    - dans le fichier public/index.html, ajouter dans le head après le titre :
        -   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
            <script type="text/javascript">
                (function() {
                    emailjs.init("USER ID"); // <- USER ID dans les détails de mon compte emailjs
                })();
            </script>
    - fichier Contact.js avec le template_id utilisé (j'ai utilisé gmail, emailjs.com -> email templates)
    - message reçu dans ma boîte mail laposte car adresse laposte indiquée dans mon compte emailjs


7) yarn build


8) Pour le SEO :
    - yarn add react-helmet
        -> dans le dossier components que j'ai créé, créer le fichier 'Helmet.js'

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
                                <meta name="keywords" content="Guillaume Queste developpeur web portfolio projet react histoire France" />
                                <meta name="description" content="Frise historique répertoriant les dirigeants français au cours des siècles." />
                                <meta property="og:title" content="Projet React Histoire de france" />
                                <meta property="og:type" content="website" />
                                <meta property="og:url" content="http://histoire.guillaumequeste.fr" />
                                <meta property="og:image" content="http://www.guillaumequeste.fr/img/histoire.png" />
                                <meta property="og:locale" content="fr_FR" />
                                <meta property="og:title" content="Projet React Histoire de france" />
                                <meta property="og:description" content="Frise historique répertoriant les dirigeants français au cours des siècles." />
                                <meta property="og:site_name" content="Projet React Histoire de france" />
                                <meta name="twitter:description" content="Frise historique répertoriant les dirigeants français au cours des siècles." />
                                <meta name="twitter:title" content="Projet React Histoire de france" />
                                <meta name="twitter:image" content="http://www.guillaumequeste.fr/img/histoire.png" />
                            </Helmet>
                        </div>
                    )
                }
            }
            export default HelmetComponent

        -> dans le fichier voulu : import Helmet from './components/Helmet'
        -> puis insérer <Helmet /> dans le return :
            <Helmet title={"Frise Histoire deFrance"}
              link={"http://histoire.guillaumequeste.fr"} />

ou  - après le build, dans le fichier index.html, changer le head :
        <meta charSet="utf-8" />
        <title>Frise Histoire de France</title>
        <link rel="canonical" href="https://histoire.guillaumequeste.fr" />
        <meta name="keywords" content="Guillaume Queste developpeur web portfolio projet react histoire France" />
        <meta name="description" content="Frise historique répertoriant les dirigeants français au cours des siècles." />
        <meta property="og:title" content="Projet React Histoire de france" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://histoire.guillaumequeste.fr" />
        <meta property="og:image" content="http://www.guillaumequeste.fr/img/histoire.png" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:title" content="Projet React Histoire de france" />
        <meta property="og:description" content="Frise historique répertoriant les dirigeants français au cours des siècles." />
        <meta property="og:site_name" content="Projet React Histoire de france" />
        <meta name="twitter:description" content="Frise historique répertoriant les dirigeants français au cours des siècles." />
        <meta name="twitter:title" content="Projet React Histoire de france" />
        <meta name="twitter:image" content="http://www.guillaumequeste.fr/img/histoire.png" />

        (Ajouter une librairie :
            - yarn add react-helmet
            Créer un composant 'Helmet.jsx' dans le dossier 'components'
            Dans chaque composant, mettre :
                - import Helmet from './Helmet' (import Helmet from './components/Helmet' pour 'App.js')
                - <Helmet title={"Normal bases React"}
                        link={"https://www.guillaumequeste.fr"} />
            (pour modifier le titre et le lien pour chaque page)
        )


8') Créer les ficheirs favicon sur le site https://realfavicongenerator.net/.
    Télécharger le dossier compressé.
    Dézipper le dossier et mettre les fichiers à la racine du projet sur le serveur.
    Dans React-Helmet, ajouter les lignes suivantes :
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />


9) Ancienne version 'Detail.js' :

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
                        <img src={requireImage(personnes[this.props.match.params.id].photo)} className="tailleImage" alt={personnes[this.props.match.params.id].nom}/>
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


10) Redirect react-router :
    - importer Redirect : import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
    - <Switch>
            |
            |
        <Route path='/notfound' component={NotFound}/>
        <Redirect to="/notfound" />
     </Switch>
    - en production, à la racine du dossier, mettre un fichier ".htaccess" :
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]


11) Ajouter 2 librairies :
        - yarn add mdbreact
        - yarn add react-image-lightbox
    Ajouter un component 'LB.js'
    Ajouter un fichier css 'Lightbox.css'


12) Ajouter 2 librairies :
        - yarn add leaflet
        - yarn add react-leaflet
    Ajouter un component 'Carte.jsx'
    Ajouter un component 'Infos.jsx' (composant dans lequel se trouve la carte)
    Ajouter le css (section 'Infos' dans 'App.css')
    Bien ajouter :
        - html,
            body {
                margin: 0;
                padding: 0;
                height: 100%;
                width: 100%;
            }

            #root {
                width: inherit;
                height: inherit;
            }

            .leaflet-container {
                width: 60vw;
                height: 60vh;
                margin-bottom: 10px;
            }

    -> actualisation
    Map devient MapContainer
    ne pas oublier dans le composant où on met la carte:

    Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'


13) Créer un component 'ScrollToTop' dans le dossier 'components' :
        import { useEffect } from 'react';
        import { withRouter } from 'react-router-dom';
        function ScrollToTop({ history }) {
        useEffect(() => {
            const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
            });
            return () => {
            unlisten();
            }
        }, []);
        return null;
        }
        export default withRouter(ScrollToTop);
    
    Dans le fichier 'index.js', ajouter :
        import ScrollToTop from './components/ScrollToTop'
        et
        <Router>
        <ScrollToTop />     <----------
        <Switch>
            <Route exact path='/' component={App}/>


14) voir 'Animations'