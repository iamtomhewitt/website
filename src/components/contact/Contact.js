import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

import './Contact.css';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
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
      email, firstName, lastName, message,
    } = this.state;

    const parameters = {
      from_name: email,
      to_name: 'tommhewitt@gmail.com',
      subject: `New Website Message from ${firstName} ${lastName}`,
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
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  }

  validateForm() {
    const {
      email, firstName, lastName, message,
    } = this.state;

    return (firstName.length > 0
          && lastName.length > 0
          && email.length > 0
          && message.length > 0);
  }

  render() {
    const {
      email, firstName, lastName, message,
    } = this.state;

    return (
      <>
        <div className="Contact">
          <h1>Contact</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="entry">
              <label>
                First Name
                <span className="required">*</span>
              </label>
              <input id="firstName" type="text" value={firstName} onChange={this.handleChange} />
            </div>

            <div className="entry">
              <label>
                Last Name
                <span className="required">*</span>
              </label>
              <input id="lastName" type="text" value={lastName} onChange={this.handleChange} />
            </div>

            <div className="entry">
              <label>
                Email
                <span className="required">*</span>
              </label>
              <input id="email" type="text" value={email} onChange={this.handleChange} />
            </div>

            <div className="entry">
              <label>
                Message
                <span className="required">*</span>
              </label>
              <input id="message" type="text" value={message} onChange={this.handleChange} />
            </div>

            <button type="submit" disabled={!this.validateForm()}>Send!</button>
          </form>
        </div>
      </>
    );
  }
}
