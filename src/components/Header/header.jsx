import Nav from '../Nav/nav';

const developerName = 'Eric Hulse';
const welcomeMessage = 'Hello! Welcome to my portfolio.';

function Header() {
  return (
    <header>
      <div>
        <Nav developerName={developerName} />
      </div>
      <br />
      <p className='title container'>{welcomeMessage} </p>
      <br />
    </header>
  );
}

export default Header;

