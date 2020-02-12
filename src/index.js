import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Liste from './components/Liste'
import Detail from './components/Detail'
import Normal from './components/Normal'
import Contact from './components/Contact'
import Toggle from './components/Toggle'

import NotFound from './components/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/liste' component={Liste}/>
            <Route path='/personne/:id' component={Detail} />
            <Route path='/normal' component={Normal}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/toggle' component={Toggle}/>

            <Route component={NotFound} />
        </Switch>
    </Router>
)


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
