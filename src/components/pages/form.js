import React from 'react';

class Form extends React.Component {
  render () {
    return (
        <form className='form-group'>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="email" required />
            <input type="phone" placeholder="phone number" required />
            <input type="submit" value="submit" />
        </form>
    )
  }
}

export default Form;
