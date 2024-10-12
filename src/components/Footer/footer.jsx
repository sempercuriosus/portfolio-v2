import { Link } from 'react-router-dom';
import links from '../../utils/links';

function Footer() {
  return (
    <>
      <footer
        className='footer'
        style={{ marginTop: '10rem' }}>
        <div className='container'>
          <p className='block'>
            Here are some of my{' '}
            <strong>
              <Link
                id='link-portfolio-about'
                to='/Portfolio'>
                Selected Projects →
              </Link>
            </strong>
          </p>

          <p className='block'>
            If you want to{' '}
            <strong>
              <Link
                id='link-contact-about'
                to='/Contact'>
                Connect with me →
              </Link>
            </strong>
          </p>

          <p className='block'>
            See what I am up to on my{' '}
            <strong>
              <a
                href={links.github}
                target='_blank'
                rel='noopener noreferrer'>
                GitHub landing page →
              </a>{' '}
            </strong>
          </p>

          <p className='block'>
            Occasionally share posts on my{' '}
            <strong>
              <a
                href={links.blog}
                target='_blank'
                rel='noopener noreferrer'>
                Hey World Blog →
              </a>
            </strong>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

