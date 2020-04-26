import React from 'react';

class Form extends React.Component {
  render () {
    return (
        <form className='form-group'>
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
    )
  }
}

export default Form;
