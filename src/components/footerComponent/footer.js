import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  render () {
    return (
      <footer className='container-fluid'>
        <div className='row'>
          <div className='col-md-8'>
            <Link to='/Careers'> Careers </Link>
            <Link to='/Contacts'> Contacts </Link>
            <Link to='/About'> About </Link>
            <Link to='/Copyright'> Copyright </Link>
            <Link to='/Terms'> Terms and Conditions </Link>
          </div>
          <div className='col-md-4'>
            <Link to='#'> facebook </Link>
            <Link to='#'> twitter </Link>
            <Link to='#'> linkedin </Link>
            <Link to='#'> instagram </Link>
            <Link to='#'> telegram </Link>
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
