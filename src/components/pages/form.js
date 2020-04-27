import React from 'react';

class Form extends React.Component {
  render () {
    return (
        <form className='form-group'>
            <input type="text" placeholder="Enter your name" required />
            <input type="email" placeholder="Enter your email" required />
            <input type="phone" placeholder="Enter your phone number" required />
            <input type="submit" value="submit" />
        </form>
    )
  }
}

export default Form;
