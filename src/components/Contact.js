import React, { Component } from 'react'
import Header from './Header'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { nom: '', prenom: '', email: '', telephone: '', message: '' };
        this.handleChangeNom = this.handleChangeNom.bind(this);
        this.handleChangePrenom = this.handleChangePrenom.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeTelephone = this.handleChangeTelephone.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeNom(event) {
        this.setState({nom: event.target.value})
    }

    handleChangePrenom(event) {
        this.setState({prenom: event.target.value})
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value})
    }

    handleChangeTelephone(event) {
        this.setState({telephone: event.target.value})
    }

    handleChangeMessage(event) {
        this.setState({message: event.target.value})
    }
    
    handleSubmit (event) {
        const templateId = 'template_id'; // mettre son template_id (emailjs.com -> email templates)
    
        this.sendFeedback(templateId, {nom: this.state.nom, prenom: this.state.prenom, email: this.state.email, telephone: this.state.telephone, message: this.state.message, })
    }
    
      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            document.querySelector("#message").innerHTML = 
                '<div style="font-weight: bold; text-align:center;"><h3>Message envoyé !</h3></div>'
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    render () {
        return (
            <div>
                <Header />
                <form>
                    <h1>Envoyer un message</h1>
                    <div>
                        <input type="text"
                                onChange={this.handleChangeNom}
                                placeholder="Nom"
                                required
                                value={this.state.nom}/> 
                        <input type="text"
                                onChange={this.handleChangePrenom}
                                placeholder="Prénom"
                                required
                                value={this.state.prenom}/>
                            <input type="text"
                                onChange={this.handleChangeEmail}
                                placeholder="Email"
                                required
                                value={this.state.email}/>
                            <input type="text"
                                onChange={this.handleChangeTelephone}
                                placeholder="Numéro de téléphone"
                                required
                                value={this.state.telephone}/>  
                        <textarea
                            onChange={this.handleChangeMessage}
                            placeholder="Votre message"
                            required
                            value={this.state.message}
                            style={{width: '100%', height: '150px'}}
                        />
                    </div>
                    <input type="button" value="Submit" onClick={this.handleSubmit} />
                </form>
                <div id="message"></div>
            </div>
        )
    }
}

export default Contact