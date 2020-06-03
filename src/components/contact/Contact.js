import React, { Component } from 'react';
import {
  FormGroup, FormControl, FormLabel, Button,
} from 'react-bootstrap';
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
          <h1 id="title">Contact</h1>
          <div id="container">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="firstName">
                <FormLabel>First Name*</FormLabel>
                <FormControl
                  type="text"
                  value={firstName}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="lastName">
                <FormLabel>Last Name*</FormLabel>
                <FormControl
                  type="text"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="email">
                <FormLabel>Email*</FormLabel>
                <FormControl
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="message">
                <FormLabel>Message*</FormLabel>
                <FormControl
                  autoFocus
                  value={message}
                  onChange={this.handleChange}
                />
              </FormGroup>

              <Button
                block
                variant="primary"
                disabled={!this.validateForm()}
                type="submit"
              >
                Send Message!
              </Button>
            </form>
          </div>
        </>
      );
    }
}
