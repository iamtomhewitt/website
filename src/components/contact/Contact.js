import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as emailjs from 'emailjs-com';

import './Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  MobileLayout = () => {
    const {
      email, name, message,
    } = this.state;
    const { getClass } = this.props;
    return (
      <div className={getClass('contact')}>
        <div className={getClass('content')}>
          <h1>
            Say
            <span className="highlight">&nbsp;Hi</span>
            !
          </h1>

          <div className={getClass('form')}>
            <input id="name" type="text" value={name} placeholder="Name" onChange={this.handleChange} />
            <input id="email" type="text" value={email} placeholder="Email" onChange={this.handleChange} />
            <input className={getClass('message')} id="message" type="text" value={message} placeholder="Message" onChange={this.handleChange} />
            <div>
              <button type="submit" disabled={!this.validateForm()} onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  DesktopLayout = () => {
    const {
      email, name, message,
    } = this.state;
    const { getClass } = this.props;
    return (
      <div className={getClass('contact')}>
        <div className={getClass('content')}>
          <h1>
            Say
            <span className="highlight">&nbsp;Hi</span>
            !
          </h1>

          <div className={getClass('form')}>
            <div className={getClass('top')}>
              <input id="name" type="text" value={name} placeholder="Name" onChange={this.handleChange} />
              <input id="email" type="text" value={email} placeholder="Email" onChange={this.handleChange} />
            </div>

            <div className={getClass('bottom')}>
              <input className="message" id="message" type="text" value={message} placeholder="Message" onChange={this.handleChange} />
              <button type="submit" disabled={!this.validateForm()} onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
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

  validateForm() {
    const {
      email, name, message,
    } = this.state;

    return (name.length > 0
      && email.length > 0
      && message.length > 0);
  }

  clearForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  render() {
    const { isMobile } = this.props;
    return isMobile ? <this.MobileLayout /> : <this.DesktopLayout />;
  }
}

Contact.propTypes = {
  getClass: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Contact;
