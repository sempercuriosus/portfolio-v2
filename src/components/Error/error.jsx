import { useRouteError } from 'react-router-dom';

function Error() {
  document.title = 'Uff Da! | Third Coast 🦡';

  const error = useRouteError();
  console.error(error.status, error.statusText, error.data);

  return (
    <section>
      <h2>Ope!</h2>
      <p>Something happened, doncha know...</p>
      <p>
        <i>{error.statusText && ' ' && error.data}</i>
      </p>
    </section>
  );
}

export default Error;

