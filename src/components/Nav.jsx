import { useEffect, useState } from 'react';
const links = [['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['training', 'Training'], ['education', 'Education'], ['contact', 'Contact']];
export default function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return (
    <header className="nav">
      <div className="wrap nav-row">
        <a className="brand" href="#top" aria-label="Kumar Shubham, back to top" onClick={() => setOpen(false)}>KS<span>.</span></a>
        <button className="menu-btn" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen((o) => !o)}>
          <span className="sr">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="bars" aria-hidden="true" />
        </button>
        <nav id="site-menu" aria-label="Primary" className={open ? 'open' : ''}>
          <ul>
            {links.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>)}
            <li className="nav-cta"><a className="btn outline-blue" href="#contact" onClick={() => setOpen(false)}>Let’s connect</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
