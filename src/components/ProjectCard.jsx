import Tag from './Tag.jsx';
export default function ProjectCard({ p }) {
  return (
    <article className="card">
      <p className="meta"><span className="pid">{p.id}</span> {p.category}</p>
      <h3>{p.title}</h3>
      <p className="muted">{p.summary}</p>
      <ul className="points">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
      <ul className="tags" aria-label="Technologies">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</ul>
    </article>
  );
}
