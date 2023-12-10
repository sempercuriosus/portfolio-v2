import React from 'react';
import './style/App.css';
import Header from './components/Header/header.jsx';

import Index from './components/Main/index.jsx';
import Footer from './components/Footer/footer.jsx';

function App() {
  {
    /* setting up the app structure */
  }
  return (
    <React.Fragment>
      {/* Header also adds the nav */}
      <Header />

      {/* rendering the main content element now, and the index is responsible for section element */}
      <main>
        {/* Index is responsible for rendering the content for each page rendered */}
        <Index />
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default App;

