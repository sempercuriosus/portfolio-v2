import './style/App.css';
import Header from './components/Header/header.jsx';
import Nav from './components/Nav/nav.jsx';
import Index from './components/Main/index.jsx';
import Footer from './components/Footer/footer.jsx';

function App() {
  {
    /* setting up the app structure */
  }
  return (
    <div>
      <Header>
        <Nav />
      </Header>
      <Index />
      <Footer />
    </div>
  );
}

export default App;

