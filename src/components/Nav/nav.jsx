import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Nav({ developerName }) {
  return (
    // Main Nav Group
    <nav
      id='nav-nav'
      className='navbar has-shadow is-spaced'
      role='navigation'>
      {/* About is the root route, href reflects this */}
      <div
        id='dev-name'
        className='navbar-item notification is-dark'>
        {developerName} <em id='name-div'>|</em>
      </div>

      {/* Links */}

      {/* About */}
      <Link
        id='link-about'
        to='/'
        className='navbar-item'>
        <strong>ABOUT</strong>
      </Link>

      {/* Portfolio */}
      <Link
        id='link-portfolio'
        to='/Portfolio'
        className='navbar-item'>
        <strong>PORTFOLIO</strong>
      </Link>

      {/* Resume */}
      <Link
        id='link-resume'
        to='/Resume'
        className='navbar-item'>
        <strong>RESUME</strong>
      </Link>

      {/* Contact */}
      <Link
        id='link-contact'
        to='/Contact'
        className='navbar-item'>
        <strong>CONTACT</strong>
      </Link>
    </nav>
  );
}

export default Nav;

