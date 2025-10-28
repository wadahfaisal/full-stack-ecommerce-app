import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    // <main className="error-page page-100">
    <main className="error-page page-100">
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </main>
  );
};

export default ErrorPage;
