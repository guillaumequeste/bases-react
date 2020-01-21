Si 'npx create-react-app myapp' n'installe pas public, src, scripts, faire :
yarn create react-app myapp 

Ajouter bootstrap :
    - yarn add bootstrap
    - yarn add jquery popper.js
    - src/index.js :
        - import 'bootstrap/dist/css/bootstrap.min.css'
        - import $ from 'jquery'
        - import Popper from 'popper.js'
        - import 'bootstrap/dist/js/bootstrap.bundle.min'
    - lorsqu'on l'utilise, il faut fermer la balise input : <input>...</input>

Ajouter animate.css :
    - yarn add animate.css
    - src/index.js :
        - import "animate.css/animate.min.css"
    - dans le fichier voulu (ex : App.js) :
        - <div className="animated flash delay-2s">Example</div>

Ajouter react-reveal :
    - yarn add react-reveal
    - dans le fichier voulu (ex : App.js) :
        - import Zoom from 'react-reveal/Zoom'
        - <Zoom>
            <p>Markup that will be revealed on scroll</p>
          </Zoom>

Ajouter react anchor link smooth scroll :
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

Envoyer un email via EmailJS :
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

yarn build

Pour le SEO :
    - yarn add react-helmet
        -> dans le fichier voulu : import {Helmet} from "react-helmet";
        -> puis : class Application extends React.Component {
                    render () {
                        return (
                            <div className="application">
                                <Helmet>
                                    <meta charSet="utf-8" />
                                    <title>My Title</title>
                                    <link rel="canonical" href="http://mysite.com/example" />
                                </Helmet>
                                ...
                            </div>
                        );
                    }
                    };

ou  - après le build, dans le fichier index.html, changer le head :
        <meta charset="utf-8" />
        <title>Jeux Olympiques Guillaume Queste</title>
        <meta name="keywords" content="Guillaume Queste developpeur web portfolio projet personnel" />
        <meta name="description" content="projet personnel jeux olympiques guillaume queste portfolio" />
        <meta property="og:title" content="Portfolio Guillaume Queste développeur web" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.guillaumequeste.fr" />
        <meta property="og:image" content="http://www.guillaumequeste.fr/img/photoCVmini.jpg" />