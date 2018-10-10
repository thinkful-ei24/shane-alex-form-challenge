import React from 'react';
import {reduxForm, Field} from 'redux-form';

class RegistrationForm extends React.Component {

  render() {
    return (
        <form onSubmit={e => console.log(e)}>
          {/* <label for='tracking'>Tracking Number</label> */}
          <Field name='tracking' element="input" id='tracking' type='text' label='Tracking Number' />
          {/* <label for='issue'>What is your issue?</label> */}
          <Field element="select" name='issue' id='issue' label="What is your issue?">
            <option value="not-delivered">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damaged">Some of my order arrived damaged</option>
            <option value="other">Other (give details below)</option>
          </Field>
          {/* <label for='details'>Give more details (optional)</label> */}
          <Field element="textarea" name='details' id='details' label="Give more details" />
          <button>Submit</button>
        </form>
      )
  }
}

export default reduxForm({
  form: 'register'
})(RegistrationForm);
