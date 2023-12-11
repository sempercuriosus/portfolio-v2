import Nav from '../Nav/nav';

const developerName = 'Eric Hulse';

function Header() {
  return (
    <header>
      <div>
        <Nav developerName={developerName} />
      </div>
      <br />
      <br />
    </header>
  );
}

export default Header;

