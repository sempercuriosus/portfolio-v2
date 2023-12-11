import { useRouteError } from 'react-router-dom';
import { Fragment } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';

function Error() {
  document.title = 'Uff Da! | Third Coast 🦡';

  const error = useRouteError();

  return (
    <Fragment>
      <Header />
      <section className='section'>
        <div className='tile is-child notification is-danger'>
          <h2 className='title'>
            <strong>Ope!</strong>
          </h2>
          Something happened, doncha know...{' '}
          <i>{error.statusText && ' ' && error.data}</i>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default Error;

