import links from '../../utils/links';

function Footer() {
  return (
    <>
      <footer
        className='footer'
        style={{ marginTop: '10rem' }}>
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
    </>
  );
}

export default Footer;

