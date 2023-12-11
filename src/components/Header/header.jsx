import Nav from '../Nav/nav';

const developerName = 'Eric Hulse';

function Header() {
  return (
    <header className='block'>
      <Nav developerName={developerName} />
    </header>
  );
}

export default Header;

