import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import Icon from './Icon.jsx';
import { aboutText, aboutCards } from '../data/content.js';
export default function About() {
  return (
    <Section id="about" kicker="01 — About" title="Engineering reliable networks">
      <div className="about">
        <Reveal className="about-text">{aboutText.map((t) => <p key={t} className="muted">{t}</p>)}</Reveal>
        <Reveal className="stack">
          {aboutCards.map((c) => (
            <article key={c.title} className="card row">
              <span className="stat-ico"><Icon name={c.icon} size={24} /></span>
              <div><h3>{c.title}</h3><p className="muted">{c.text}</p></div>
            </article>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
