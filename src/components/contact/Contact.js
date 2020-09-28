import React from "react";
import {AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            company: '',
            email: '',
            content: '',
            success: false,
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleChangeCompany = this.handleChangeCompany.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        let successBar = <div></div>
        if(this.state.success){
            successBar = <div>Merci de nous avoir contacté. Nous vous répondrons le plus rapidement possible</div>
        }
       return(
           <div className="container-contact">
               <div className="container-left">
                   <div className="bg_opacity">
                       <div className="border_left"></div>
                            <h1 className="title-contact">Nous contacter</h1>
                            <div className="ReseauSociaux">
                                <a href="https://www.facebook.com/Raid-44L-111933133874314ra" target="_blank"><AiOutlineFacebook/> Facebook</a>
                                <a href="https://twitter.com/Raid_44l" target="_blank"><AiOutlineTwitter/> Twitter</a>
                                <a href="https://www.instagram.com/raid_44l" target="_blank"><AiOutlineInstagram/> Instagram</a>
                            </div>

                       <div className="border_right"></div>
                   </div>
                   <div className="illustration"></div>
               </div>
               <div className="container-right">
                   <form>
                       {successBar}
                       <div>
                           <label htmlFor="first_name">Prénom *</label>
                           <input
                               type="text"
                               id="first_name"
                               name="first_name"
                               onChange={this.handleChangeName}
                               required
                               value={this.state.first_name}
                               style={{width: '60%', height: '5px'}}
                           />
                           <label htmlFor="last_name">Nom *</label>
                           <input
                               type="text"
                               id="last_name"
                               name="last_name"
                               onChange={this.handleChangeLastName}
                               required
                               value={this.state.last_name}
                               style={{width: '60%', height: '5px'}}
                           />
                           <label htmlFor="company">Entreprise</label>
                           <input
                               type="text"
                               id="company"
                               name="company"
                               onChange={this.handleChangeCompany}
                               value={this.state.company}
                               style={{width: '60%', height: '5px'}}
                           />
                           <label htmlFor="email">Email *</label>
                           <input
                               type="email"
                               id="email"
                               name="email"
                               onChange={this.handleChangeEmail}
                               required
                               value={this.state.email}
                               style={{width: '60%', height: '5px'}}
                           />
                           <label htmlFor="message">Votre message *</label>
                           <textarea
                               id="message"
                               name="message"
                               onChange={this.handleChangeContent}
                               required
                               value={this.state.content}
                               style={{width: '60%', height: '150px'}}
                           />
                       </div>
                       <input
                           type="button"
                           value="Envoyer"
                           style={{width: '15%', height: '30px'}}
                           onClick={this.handleSubmit}
                       />
                   </form>
               </div>
           </div>

        )
    }

    handleChangeLastName(event){
        this.setState({last_name: event.target.value})
    }
    handleChangeName(event) {
        this.setState({first_name: event.target.value})
    }
    handleChangeCompany(event){
        this.setState({company: event.target.value})
    }
    handleChangeEmail(event) {
        this.setState({email: event.target.value})
    }
    handleChangeContent(event) {
        this.setState({content: event.target.value})
    }

    handleSubmit (event) {
        const templateId = 'template_uqSXRFQx';
        this.sendFeedback(templateId, {message_html: this.state.content, from_first_name: this.state.first_name, form_last_name: this.state.last_name, form_company: this.state.company, form_email: this.state.email})
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
