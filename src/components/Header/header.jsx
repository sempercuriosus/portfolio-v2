import Nav from '../Nav/nav';

const developerName = 'Eric Hulse';
const welcomeMessage = 'Hello! Welcome to my portfolio.';

function Header() {
  return (
    <div>
      <p>{developerName} </p>
      <p>{welcomeMessage} </p>
      <Nav />
    </div>
  );
}

export default Header;

