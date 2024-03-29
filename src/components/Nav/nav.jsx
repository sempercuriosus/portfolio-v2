import { Link } from 'react-router-dom';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Nav({ developerName }) {
  const [isActive, setisActive] = useState(false);

  return (
    <>
      <nav
        id='nav-nav'
        className='navbar is-spaced has-background-dark'
        role='navigation'
        aria-label='main navigation'>
        <div className='navbar-brand'>
          <div
            id='dev-name'
            className='navbar-item has-background-dark'>
            {developerName} <em id='name-div'>|</em>
          </div>

          <a
            role='button'
            className={`navbar-burger burger has-text-light ${
              isActive ? 'is-active' : ''
            }`}
            aria-label='menu'
            aria-expanded='false'
            onClick={() => {
              setisActive(!isActive);
            }}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        {/* Links */}
        <div
          id='navbar-menu'
          className={`navbar-menu has-background-dark ${
            isActive ? 'is-active' : ''
          }`}>
          <div className='navbar-start'>
            {/* About */}
            <Link
              id='link-about'
              to='/'
              className='navbar-item has-text-light'>
              <strong>ABOUT</strong>
            </Link>

            {/* Portfolio */}
            <Link
              id='link-portfolio'
              to='/Portfolio'
              className='navbar-item has-text-light'>
              <strong>PORTFOLIO</strong>
            </Link>

            {/* Resume */}
            <Link
              id='link-resume'
              to='/Resume'
              className='navbar-item has-text-light'>
              <strong>RESUME</strong>
            </Link>

            {/* Contact */}
            <Link
              id='link-contact'
              to='/Contact'
              className='navbar-item has-text-light'>
              <strong>CONTACT</strong>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

