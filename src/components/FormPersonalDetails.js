import React, { Component } from 'react';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, prevStep } = this.props;
    return (
      <div>
        <button onClick={prevStep}>Back</button>
        <div className='form-group'>
          <label htmlFor='fistName'>Enter Your Occupation</label>
          <input type='text' onChange={handleChange('occupation')} value={values.occupation} />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>Enter Your City</label>
          <input type='text' onChange={handleChange('city')} value={values.city} />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>Enter Your Bio</label>
          <textarea type='text' onChange={handleChange('bio')} value={values.bio} />
        </div>

        <button onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

export default FormPersonalDetails;
