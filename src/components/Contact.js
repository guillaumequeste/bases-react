import React, { Component } from 'react'
import Header from './Header'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: 'Gui', email: 'email@example.com' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({feedback: event.target.value})
      }
    
      handleSubmit (event) {
        const templateId = 'template_id'; // mettre son template_id
    
        this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
      }
    
      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            document.querySelector("#message").innerHTML = 'message envoyé'
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    render () {
        return (
            <div>
                <Header />
                <form className="test-mailing">
                    <h1>Let's see if it works</h1>
                    <div>
                    <textarea
                        id="test-mailing"
                        name="test-mailing"
                        onChange={this.handleChange}
                        placeholder="Post some lorem ipsum here"
                        required
                        value={this.state.feedback}
                        style={{width: '100%', height: '150px'}}
                    />
                    </div>
                    <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
                </form>
                <div id="message"></div>
            </div>
        )
    }
}

export default Contact