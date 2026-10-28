import { Link } from "react-router-dom";

function About() {
  return (
    <section className="page">
      <p className="eyebrow">About</p>
      <h1 className="hero__title">
        Meet <span className="accent">TaskMate.</span>
      </h1>
      <p className="hero__subtitle">
        TaskMate is a simple, friendly to-do app built with React. Add tasks,
        tick them off, and filter by what's still active — your tasks are saved
        in your browser automatically.
      </p>
      <Link to="/" className="btn-primary btn-link">
        ← Back to tasks
      </Link>
    </section>
  );
}

export default About;
