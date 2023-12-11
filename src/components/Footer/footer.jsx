import { Fragment } from 'react';

const links = {
  github: 'https://github.com/sempercuriosus',
  email: 'mailto:' + 'hulse@hey.com',
  blog: 'https://world.hey.com/hulse/',
};

function Footer() {
  return (
    <Fragment>
      <br />
      <br />
      <footer className='footer'>
        <div className='container'>
          <p>
            Checkout my GitHub <a href={links.github}>landing page</a> and see
            what I am up to.
          </p>

          <p>
            I occasionally post to my <a href={links.blog}>blog</a>, so please
            check out the posts, if you like. This is very new, but I would
            still like to share.
          </p>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;

