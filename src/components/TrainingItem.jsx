export default function TrainingItem({ t }) {
  return (
    <article className="entry">
      <div className="entry-head">
        <h3>{t.title}</h3>
        {t.status && <span className="badge">{t.status}</span>}
      </div>
      <p className="meta">{[t.org, t.period].filter(Boolean).join(' · ')}</p>
      {t.points.length > 0 && <ul className="points">{t.points.map((x) => <li key={x}>{x}</li>)}</ul>}
    </article>
  );
}
