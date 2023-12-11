import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Nav({ developerName }) {
  const name = developerName;

  return (
    // Main Nav Group
    <nav
      id='nav-nav'
      className='navbar is-spaced  notification is-dark'
      role='navigation'
      aria-label='main navigation'>
      {/* About is the root route, href reflects this */}
      <div className='navbar-item'>
        <div id='dev-name'>{name}</div>
        <div id='name-div'>
          <em>|</em>
        </div>
      </div>

      {/* Links */}

      {/* About */}
      <Link
        id='link-about'
        to='/'
        className='navbar-item'>
        <strong>About</strong>
      </Link>

      {/* Portfolio */}
      <Link
        id='link-portfolio'
        to='/Portfolio'
        className='navbar-item'>
        <strong>Portfolio</strong>
      </Link>

      {/* Resume */}
      <Link
        id='link-resume'
        to='/Resume'
        className='navbar-item'>
        <strong>Resume</strong>
      </Link>

      {/* Contact */}
      <Link
        id='link-contact'
        to='/Contact'
        className='navbar-item is-light'>
        <strong>Contact</strong>
      </Link>
    </nav>
  );
}

export default Nav;

