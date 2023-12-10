import Nav from '../Nav/nav';

const developerName = 'Eric Hulse';
const welcomeMessage = 'Hello! Welcome to my portfolio.';

function Header() {
  return (
    <header>
      <p>{developerName} </p>
      <Nav />
      <p>{welcomeMessage} </p>
    </header>
  );
}

export default Header;

