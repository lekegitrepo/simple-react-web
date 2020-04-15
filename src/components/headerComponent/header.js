import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <header>
        <div className='logo'> LOGO </div>
        <nav>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Career</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>About</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
