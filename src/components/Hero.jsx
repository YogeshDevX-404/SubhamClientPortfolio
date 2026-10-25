import Icon from './Icon.jsx';
import { stats, heroChips } from '../data/content.js';
export default function Hero({ p }) {
  const tel = p.phone.replace(/\s/g, '');
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="pill"><span className="dot" aria-hidden="true" />Network Engineer • Gurugram, India</p>
            <h1 id="hero-title"><span>Kumar</span> <span className="blue">Shubham</span></h1>
            <p className="role">{p.role}</p>
            <p className="lede">{p.summary}</p>
            <div className="actions">
              <a className="btn primary" href="#projects"><Icon name="arrow" />Explore My Work</a>
              <a className="btn outline" href={p.resume} download><Icon name="download" />Download Resume</a>
            </div>
            <ul className="quick">
              <li><a href={`tel:${tel}`}><span className="ico"><Icon name="phone" size={18} /></span>{p.phone}</a></li>
              <li><a href={`mailto:${p.email}`}><span className="ico"><Icon name="mail" size={18} /></span>{p.email}</a></li>
            </ul>
          </div>
          <div className="visual">
            <div className="arch" aria-hidden="true" />
            <svg className="orbits" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 70C2 40 25 22 52 24" /><path d="M98 30C80 28 66 38 66 52" /><path d="M96 60C84 56 74 62 72 76" />
              <circle cx="52" cy="24" r="1.1" /><circle cx="66" cy="52" r="1.1" /><circle cx="72" cy="76" r="1.1" /><circle cx="2" cy="70" r="1.1" />
            </svg>
            <img src="/kumar.webp" width="800" height="1038" alt="Portrait of Kumar Shubham wearing a navy blazer and white shirt" fetchpriority="high" />
            {heroChips.map(([icon, label], i) => (
              <span key={label} className={`chip chip-${i + 1}`}><Icon name={icon} size={20} />{label}</span>
            ))}
          </div>
        </div>
        <ul className="stats" aria-label="Highlights">
          {stats.map((s) => (
            <li key={s.label}>
              <span className="stat-ico"><Icon name={s.icon} size={28} /></span>
              <div><p className="stat-v">{s.value}</p><p className="stat-l">{s.label}</p><p className="stat-n">{s.note}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
