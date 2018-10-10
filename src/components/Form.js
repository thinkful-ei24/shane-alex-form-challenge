import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, correctLength, charIsNum} from './validators';
import {register} from './actions/actions';
import Input from './input';
class RegistrationForm extends React.Component {

  render() {
    if(this.props.submitSucceeded) {
      return (
        <div>Submitted</div>
      )
    }
    return (
        <form onSubmit={this.props.handleSubmit(values =>
          this.props.dispatch(register(values))
      )}>
          <Field name='trackingNumber' component={Input} element="input" id='trackingNumber' type='text' label='Tracking Number'
          validate={[required, nonEmpty, correctLength, charIsNum]} />
          <Field component={Input} element="select" name='issue' id='issue' label="What is your issue?">
            <option value="not-delivered">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damaged">Some of my order arrived damaged</option>
            <option value="other">Other (give details below)</option>
          </Field>
          <Field component={Input} element="textarea" name='details' id='details' label="Give more details" />

          <button>Submit</button>

        </form>
      )
  }
}

export default reduxForm({
  form: 'register',
  initialValues: {
    issue: "not-delivered"
  }
})(RegistrationForm);
