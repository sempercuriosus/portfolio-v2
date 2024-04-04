import { Link } from 'react-router-dom';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Nav({ developerName }) {
  const [isActive, setisActive] = useState(false);

  return (
    <>
      <nav
        id='nav-nav'
        className='navbar is-spaced'
        role='navigation'
        aria-label='main navigation'>
        <div className='navbar-brand'>
          <div
            id='dev-name'
            className='navbar-item'>
            {developerName}{' '}
            <em
              id='name-div'
              style={{ color: 'black' }}>
              |
            </em>
          </div>

          <a
            role='button'
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label='menu'
            aria-expanded='false'
            onClick={() => {
              setisActive(!isActive);
            }}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>{' '}
          </a>
        </div>

        {/* Links */}
        <div
          id='navbar-menu'
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className='navbar-start'>
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
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

