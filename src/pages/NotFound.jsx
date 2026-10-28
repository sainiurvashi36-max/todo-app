import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page">
      <p className="eyebrow">Error 404</p>
      <h1 className="hero__title">
        Page not <span className="accent">found.</span>
      </h1>
      <p className="hero__subtitle">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn-primary btn-link">
        Go home
      </Link>
    </section>
  );
}

export default NotFound;
