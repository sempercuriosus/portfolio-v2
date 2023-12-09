import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      {/* About is the root route, href reflects this */}
      <Link to='/'>About</Link>
      <Link to='/Portfolio'>Portfolio</Link>
      <Link to='/Resume'>Resume</Link>
      <Link to='/Contact'>Contact</Link>
    </nav>
  );
}

export default Nav;

