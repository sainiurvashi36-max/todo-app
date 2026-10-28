import { useTodos } from "../context/TodoContext.jsx";
import TodoForm from "../components/TodoForm.jsx";
import TodoList from "../components/TodoList.jsx";

function Home() {
  const { stats } = useTodos();

  const cards = [
    { label: "Total Tasks", value: stats.total, icon: "📋", tone: "peach" },
    { label: "Remaining", value: stats.remaining, icon: "⏳", tone: "sand" },
    { label: "Completed", value: stats.completed, icon: "🎉", tone: "rose" },
  ];

  return (
    <>
      <section className="hero">
        <p className="eyebrow">Your personal workspace</p>
        <h1 className="hero__title">
          Make today <span className="accent">count.</span>
        </h1>
        <p className="hero__subtitle">Small steps every day lead to big results.</p>
      </section>

      <section className="stats">
        {cards.map((c) => (
          <div className="stat-card" key={c.label}>
            <div className={`stat-card__icon tone-${c.tone}`}>{c.icon}</div>
            <div>
              <p className="stat-card__label">{c.label}</p>
              <p className="stat-card__value">{c.value}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="panel">
        <h2 className="panel__title">My Tasks</h2>
        <p className="panel__subtitle">Keep track of what matters today.</p>
        <TodoForm />
        <TodoList />
      </section>
    </>
  );
}

export default Home;
