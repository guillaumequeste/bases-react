import React, { Component } from 'react'
import Header from './Header'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { ville: '', genre: '', nom: '', prenom: '', email: '', telephone: '', message: '', errors: {nom:''} };
        this.handleChangeVille = this.handleChangeVille.bind(this);
        this.handleChangeGenre = this.handleChangeGenre.bind(this);
        this.handleChangeNom = this.handleChangeNom.bind(this);
        this.handleChangePrenom = this.handleChangePrenom.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeTelephone = this.handleChangeTelephone.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeVille(event) {
        this.setState({ville: event.target.value})
    }

    handleChangeGenre(event) {
        this.setState({genre: event.target.value})
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

    validateMail() {
        let errors = {}
        let formIsValid = true
        if (this.state.ville == '') {
            errors.ville = "Choisir une ville"
            formIsValid = false
        }
        if (!this.state.nom || this.state.nom.length < 3) {
            errors.nom = "Minimum 3 caractères"
            formIsValid = false
        }
        if (!this.state.prenom || this.state.prenom.length < 3) {
            errors.prenom = "Minimum 3 caractères"
            formIsValid = false
        }
        if (!this.state.email || this.state.email.length < 6) {
            errors.email = "Minimum 6 caractères"
            formIsValid = false
        }
        let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        if (!pattern.test(this.state.email)) {
            errors.email = "Ce n'est pas un email valide"
            formIsValid = false
        }
        if (!this.state.telephone || this.state.telephone.length < 8) {
            errors.telephone = "Minimum 8 caractères"
            formIsValid = false
        }
        if (!this.state.message || this.state.message.length < 5) {
            errors.message = "Minimum 5 caractères"
            formIsValid = false
        }
        this.setState({
            errors: errors
        })
        return formIsValid
    }
    
    handleSubmit (event) {
        event.preventDefault()
        if (!this.validateMail()) {
            return
        }

        const templateId = 'template_id'; // mettre son template_id (emailjs.com -> email templates)
    
        this.sendFeedback(templateId, {ville: this.state.ville, genre: this.state.genre, nom: this.state.nom, prenom: this.state.prenom, email: this.state.email, telephone: this.state.telephone, message: this.state.message, })
    }
    
      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            document.querySelector("#confirmation").innerHTML = 
                '<div style="font-weight: bold; text-align:center;"><h3>Message envoyé !</h3></div>'
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    render () {
        return (
            <div className="bodyLogement">
                <Header />
                <form className="container pb-5">
                    <h3 className="text-center pt-2">Informations concernant le logement</h3>
                    
                    <div className="form-group">
                        <label htmlFor="ville">Ville souhaitée :</label>
                        <select className="form-control"
                                id="ville"
                                value={this.state.ville} 
                                onChange={this.handleChangeVille} 
                                name="ville" 
                                required>
                            <option value="">Sélectionner</option>
                            <option value="Dieppe">Dieppe</option>
                            <option value="Paris">Paris</option>
                            <option value="Marseille">Marseille</option>
                        </select>
                        <span style={{color:"red"}}>{this.state.errors.ville}</span>
                    </div>

                    {/* je n'arrive pas à envoyer le genre dans le mail, value={this.state.genre} ou value="monsieur" ne marchent pas */}
                    <div className="form-group">
                        <p>Sélectionner un genre :</p>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" 
                                    type="radio" 
                                    name="genre" 
                                    id="monsieur" 
                                    onChange={this.handleChangeGenre}
                                    value="monsieur"
                                    checked />
                            <label className="form-check-label" htmlFor="monsieur">
                                Monsieur
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" 
                                    type="radio" 
                                    name="genre" 
                                    id="madame" 
                                    onChange={this.handleChangeGenre}
                                    value="madame" />
                            <label className="form-check-label" htmlFor="madame">
                                Madame
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input type="text"
                               className="form-control"
                               id="nom"
                               name="nom"
                                onChange={this.handleChangeNom}
                                placeholder="Nom"
                                required
                                value={this.state.nom}
                                error={this.state.errors.nom}/>
                            <span style={{color:"red"}}>{this.state.errors.nom}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="prenom">Prénom</label>
                        <input type="text"
                               className="form-control"
                               id="prenom"
                               name="prenom"
                                onChange={this.handleChangePrenom}
                                placeholder="Prénom"
                                required
                                value={this.state.prenom}
                                error={this.state.errors.prenom}/>
                            <span style={{color:"red"}}>{this.state.errors.prenom}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Adresse mail</label>
                        <input type="email"
                               className="form-control"
                               id="email"
                               name="email"
                                onChange={this.handleChangeEmail}
                                placeholder="Email"
                                required
                                value={this.state.email}
                                error={this.state.errors.email}/>
                             <span style={{color:"red"}}>{this.state.errors.email}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="telephone">N° de téléphone</label>
                        <input type="text"
                               className="form-control"
                               id="telephone"
                               name="telephone"
                                onChange={this.handleChangeTelephone}
                                placeholder="N° de téléphone"
                                required
                                value={this.state.telephone}
                                error={this.state.errors.telephone}/>
                        <span style={{color:"red"}}>{this.state.errors.telephone}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            onChange={this.handleChangeMessage}
                            placeholder="Votre message"
                            required
                            value={this.state.message}
                            rows="4"
                            error={this.state.errors.message}/>
                        <span style={{color:"red"}}>{this.state.errors.message}</span>
                    </div>

                    <div id="confirmation"></div>

                    <input type="button" className="btn btn-primary" value="Envoyer" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default Contact