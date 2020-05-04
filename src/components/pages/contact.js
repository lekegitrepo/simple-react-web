import React from 'react';
import Form from './form';

class Contact extends React.Component {
  render () {
    return (
      <div className="container-fluid contact flex-d">
        <div className="form-container flex-d">
          <h1 className="mt-5 title"> Contact us </h1>
          <Form />
        </div>
      </div>
    )
  }
}

export default Contact;
