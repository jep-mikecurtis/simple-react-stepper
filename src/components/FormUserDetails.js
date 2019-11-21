import React, { Component } from 'react';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <div className='form-group'>
          <label htmlFor='fistName'>Enter Your First Name</label>
          <input type='text' onChange={handleChange('firstName')} value={values.firstName} />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>Enter Your Last Name</label>
          <input type='text' onChange={handleChange('lastName')} value={values.lastName} />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Enter Your Email</label>
          <input type='text' onChange={handleChange('email')} value={values.email} />
        </div>
        <button onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

export default FormUserDetails;
