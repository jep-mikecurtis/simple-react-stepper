import React, { Component } from 'react';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    return (
      <div>
        <button onClick={this.props.prevStep}>Go Back</button>
        <div className='info'>
          <p>
            <b>First Name:</b> {this.props.values.firstName}
          </p>
          <p>
            <b>Last Name:</b> {this.props.values.lastName}
          </p>
          <p>
            <b>Email:</b> {this.props.values.email}
          </p>
          <p>
            <b>city:</b> {this.props.values.city}
          </p>
          <p>
            <b>bio:</b> {this.props.values.bio}
          </p>
        </div>
        <button onClick={this.continue}>Confirm and Continue</button>
      </div>
    );
  }
}

export default Confirm;
