import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

import './Contact.scss';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      email, name, message,
    } = this.state;

    const parameters = {
      from_name: email,
      to_name: 'tommhewitt@gmail.com',
      subject: `New Website Message from ${name}`,
      message_html: message,
    };

    emailjs.send(
      'gmail',
      'template_bAqyBvgM',
      parameters,
      'user_D5T3rATIktVUiqjTa1fE0',
    );

    this.clearForm();
  }

  clearForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  validateForm() {
    const {
      email, name, message,
    } = this.state;

    return (name.length > 0
      && email.length > 0
      && message.length > 0);
  }

  render() {
    const {
      email, name, message,
    } = this.state;

    return (
      <div className="contact">
        <div className="content">
          <h1>
            Say
            <span className="highlight">&nbsp;Hi</span>
            !
          </h1>

          <div className="form">
            <div className="top">
              <input id="name" type="text" value={name} placeholder="Name" onChange={this.handleChange} />
              <input id="email" type="text" value={email} placeholder="Email" onChange={this.handleChange} />
            </div>

            <div className="bottom">
              <input className="message" id="message" type="text" value={message} placeholder="Message" onChange={this.handleChange} />
              <button type="submit" disabled={!this.validateForm()}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
