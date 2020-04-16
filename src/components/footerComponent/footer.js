import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  render () {
    return (
      <footer className='container-fluid'>
        <div className='row'>
          <div className='col-md-8 footer-main'>
            <Link to='/Careers'> Careers </Link>
            <Link to='/Contacts'> Contacts </Link>
            <Link to='/About'> About </Link>
            <Link to='/Copyright'> Copyright </Link>
            <Link to='/Terms'> Terms and Conditions </Link>
          </div>
          <div className='col-md-4 social-media'>
            <Link to='#'> <i class="fab fa-facebook-square"></i> </Link>
            <Link to='#'> <i class="fab fa-twitter-square"></i
                  > </Link>
            <Link to='#'> <i class="fab fa-linkedin"></i
                  > </Link>
            <Link to='#'> <i class="fab fa-instagram-square"></i> </Link>
            <Link to='#'> <i class="fab fa-telegram-plane"></i> </Link>
          </div>
        </div>
        {/*<ul>
          <li><Link to='/Careers'> Careers </Link></li>
          <li><Link to='/Contacts'> Contacts </Link></li>
          <li className='last'><Link to='/About'> About </Link></li>
          <li className='last'><Link to='/Copyright'> Copyright </Link></li>
          <li className='last'><Link to='/Terms'> Terms and Conditions </Link></li>
        </ul>*/}
      </footer>
    )
  }
}

export default Footer;
