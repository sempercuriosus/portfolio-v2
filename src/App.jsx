import './style/App.css';
import Header from './components/Header/header.jsx';

import Index from './components/Main/index.jsx';
import Footer from './components/Footer/footer.jsx';

function App() {
  {
    /* setting up the app structure */
  }
  return (
    <div>
      {/* Header also adds the nav */}
      <Header />
      {/* Index is responsible for rendering the content for each page rendered */}
      <Index />

      <Footer />
    </div>
  );
}

export default App;

