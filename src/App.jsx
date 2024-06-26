import Header from './components/Header/header.jsx';
import Index from './components/Main/index.jsx';
import Footer from './components/Footer/footer.jsx';

function App() {
  return (
    <>
      {/* Header also adds the nav */}
      <Header />

      {/* rendering the main content element now, and the index is responsible for section element */}
      <main className='container'>
        {/* Index is responsible for rendering the content for each page rendered */}
        <Index />
      </main>

      <Footer />
    </>
  );
}

export default App;

