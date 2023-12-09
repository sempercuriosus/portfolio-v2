import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.error(error.status, error.statusText, error.data);

  return (
    <div>
      <h2>Ope!</h2>
      <p>Something happened, doncha know...</p>
      <p>
        <i>{error.statusText && ' ' && error.data}</i>
      </p>
    </div>
  );
}

export default Error;

