import React from 'react';
import './App.css';
import Header from './components/Header'
import Helmet from './components/Helmet'

const App = () => (
  <>
    <Helmet title={"Accueil bases React"}
              link={"https://www.guillaumequeste.fr"} />
    <Header />
    <div className="app">
      <h2>Accueil works</h2>
    </div>
  </>
)

export default App;