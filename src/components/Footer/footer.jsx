const links = {
  github: 'https://github.com/sempercuriosus',
  email: 'mailto:' + 'hulse@hey.com',
  blog: 'https://world.hey.com/hulse/',
};

function Footer() {
  return (
    <footer>
      <p>
        I do not use social media, but you can{' '}
        <a href={links.email}>Email Me</a>. It may be a day or two for me to
        return.
      </p>
      <p>
        Checkout my GitHub <a href={links.github}>landing page</a> and see what
        I am up to.
      </p>
      <p>
        I occasionally post to my <a href={links.blog}>blog</a>, so please check
        out the posts, if you like. This is very new, but I would still like to
        share.
      </p>
    </footer>
  );
}

export default Footer;

