import { Fragment } from 'react';

const links = {
  github: 'https://github.com/sempercuriosus',
  email: 'mailto:' + 'hulse@hey.com',
  blog: 'https://world.hey.com/hulse/',
};

function Footer() {
  return (
    <Fragment>
      <footer className='footer'>
        <div className='container'>
          <p className='block'>
            Checkout my GitHub <a href={links.github}>landing page</a> and see
            what I am up to.
          </p>

          <p className='block'>
            I sometimes share <a href={links.blog}>posts on my blog</a>, so feel
            free to check them out if you are interested. It is a relatively new
            venture, but I would love to share my thoughts with you.
          </p>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;

