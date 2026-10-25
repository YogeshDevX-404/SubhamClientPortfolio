export default function Marquee({ items }) {
  return (
    <div className="marquee" aria-label="Core skills">
      <ul className="track">
        {[...items, ...items].map((t, i) => <li key={i} aria-hidden={i >= items.length || undefined}>{t}</li>)}
      </ul>
    </div>
  );
}
