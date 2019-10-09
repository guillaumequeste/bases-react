Ajouter bootstrap :
    - yarn add bootstrap
    - yarn add jquery popper.js
    - src/index.js :
        - import 'bootstrap/dist/css/bootstrap.min.css'
        - import $ from 'jquery'
        - import Popper from 'popper.js'
        - import 'bootstrap/dist/js/bootstrap.bundle.min'

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