import React from 'react';

class Contact extends React.Component {
  render () {
    return (
      <div className='container-fluid'>
        <h1> Contact us </h1>

        <form className='form-control form-group'>
          <div className='form-control'>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className='form-control'>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className='form-control'>
            <input type="phone" placeholder="Enter your phone number" required />
          </div>
          <div className='form-control'>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default Contact;
