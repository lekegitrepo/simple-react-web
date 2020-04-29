import React from 'react';
import Form from './form';

class Contact extends React.Component {
  render () {
    return (
      <div className="container-fluid contact">
        <h1 className="mt-5"> Contact us </h1>
        <Form />
      </div>
    )
  }
}

export default Contact;
