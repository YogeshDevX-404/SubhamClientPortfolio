import Reveal from './Reveal.jsx';
export default function Section({ id, kicker, title, intro, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Reveal className="section-head">
          {kicker && <p className="kicker">{kicker}</p>}
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="muted">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
