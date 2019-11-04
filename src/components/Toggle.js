import React, { Component } from 'react'
import Header from './Header'

const styles = {
    paddingBottom: "5px"
};

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState({
            display: !this.state.display
        });
    }
  
    render () {
        return(
            <div style={styles}>
                <Header />
                <h3>Toggle :</h3>
                {this.state.display && <img src={require("../img/ic_favorite_border.png")} alt="ic_favorite_border" onClick={this.toggleDisplay}></img>}
                {!this.state.display && <img src={require("../img/ic_favorite.png")} alt="ic_favorite" onClick={this.toggleDisplay}></img>}
            </div>
        );
    }
}

export default Toggle