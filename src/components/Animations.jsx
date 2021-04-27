import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";

class Animations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details1: false
    };
    this.clicDetails1Plus = this.clicDetails1Plus.bind(this);
    this.clicDetails1Moins = this.clicDetails1Moins.bind(this);
  }

  clicDetails1Plus() {
    this.setState({
      details1: true
    });
  }

  clicDetails1Moins() {
    this.setState({
      details1: false
    });
  }

  render() {
    let divDetails1 = { display: "none", textAlign: "left" };
    let buttonDetails1Plus = {
      display: "block",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };
    let buttonDetails1Moins = {
      display: "none",
      borderRadius: "5px",
      backgroundColor: "rgb(2, 62, 24)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    };

    if (this.state.details1 === true) {
      divDetails1.display = "block";
      buttonDetails1Plus.display = "none";
      buttonDetails1Moins.display = "block";
    }

    return (
      <div>
        <Helmet
          title={"Animations bases React"}
          link={"https://www.guillaumequeste.fr"}
        />
        <Header />

        <p>Apparition / disparition du texte</p>
        <button onClick={this.clicDetails1Plus} style={buttonDetails1Plus}>
          +
        </button>
        <ul style={divDetails1}>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
        <button onClick={this.clicDetails1Moins} style={buttonDetails1Moins}>
          -
        </button>
      </div>
    );
  }
}

export default Animations;
