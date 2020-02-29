import React from "react";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            name: '',
            email: '',
            success: false,
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        let successBar = <div></div>
        if(this.state.success){
            successBar = <div>Merci de nous avoir contacté. Nous vous répondrons le plus rapidement possible</div>
        }
       return(
            <form>
                <h1>Nous contacter</h1>
                {successBar}
                <div>
                    <textarea
                        id="test-mailing"
                        name="test-mailing"
                        onChange={this.handleChangeName}
                        placeholder="Nom Prénom, Entreprise"
                        required
                        value={this.state.name}
                        style={{width: '50%', height: '50px'}}
                    /><
                    textarea
                        id="test-mailing"
                        name="test-mailing"
                        onChange={this.handleChangeEmail}
                        placeholder="Email"
                        required
                        value={this.state.email}
                        style={{width: '50%', height: '150px'}}
                    />
                    <textarea
                        id="test-mailing"
                        name="test-mailing"
                        onChange={this.handleChangeContent}
                        placeholder="Votre message"
                        required
                        value={this.state.content}
                        style={{width: '50%', height: '150px'}}
                    />
                </div>
                <input type="button" value="Submit" onClick={this.handleSubmit} />
            </form>
        )
    }

    handleChangeName(event) {
        this.setState({name: event.target.value})
    }
    handleChangeEmail(event) {
        this.setState({email: event.target.value})
    }
    handleChangeContent(event) {
        this.setState({content: event.target.value})
    }

    handleSubmit (event) {
        const templateId = 'template_uqSXRFQx';

        this.sendFeedback(templateId, {message_html: this.state.content, from_name: this.state.name, form_email: this.state.email})
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
            this.setState({success: true})
        })
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
}