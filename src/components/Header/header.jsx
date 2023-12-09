import Nav from '../Nav/nav';

const developerName = 'Eric Hulse';
const welcomeMessage = 'Hello! Welcome to my portfolio.';

function Header() {
  return (
    <header>
      <p>{developerName} </p>
      <p>{welcomeMessage} </p>
      <Nav />
    </header>
  );
}

export default Header;

