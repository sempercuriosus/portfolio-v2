import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Nav({ developerName }) {
  const name = developerName;

  return (
    <nav
      className='navbar is-info is-spaced'
      role='navigation'
      aria-label='main navigation'>
      {/* About is the root route, href reflects this */}
      <div className='navbar-item'>{name}</div>
      <hr className='navbar-divider'></hr>
      <Link
        to='/'
        className='navbar-item'>
        <strong>About</strong>
      </Link>
      <Link
        to='/Portfolio'
        className='navbar-item'>
        <strong>Portfolio</strong>
      </Link>
      <Link
        to='/Resume'
        className='navbar-item'>
        <strong>Resume</strong>
      </Link>
      <Link
        to='/Contact'
        className='navbar-item is-light'>
        <strong>Contact</strong>
      </Link>
    </nav>
  );
}

export default Nav;

