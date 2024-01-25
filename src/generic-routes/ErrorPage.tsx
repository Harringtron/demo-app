import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC<object> = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* TODO: resolve error ambiguity */}
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
    </div>
  );
};

export default ErrorPage;
