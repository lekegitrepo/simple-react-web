import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <header>
        <div className='header'>
          <div className='logo'> LOGO </div>
          <nav>
            <ul>
              <li className='first'><Link to='/'> Home </Link></li>
              <li>
                <Link to='/Products'> Products </Link>
              </li>
              <li><Link to='/Careers'> Careers </Link></li>
              <li><Link to='/Contact'> Contacts </Link></li>
              <li className='last'><Link to='/About'> About </Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;
