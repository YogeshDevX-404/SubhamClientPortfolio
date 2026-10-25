export default function Footer({ p }) {
  return (
    <footer className="footer">
      <div className="wrap foot-row">
        <p className="muted"><strong>KS.</strong> © {new Date().getFullYear()} {p.name} · {p.location}</p>
        <ul className="foot-links">
          <li><a href={`mailto:${p.email}`}>Email</a></li>
          <li><a href={`tel:${p.phone.replace(/\s/g, '')}`}>Phone</a></li>
          {p.linkedin && <li><a href={p.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>}
          <li><a href="#top">Back to top</a></li>
        </ul>
      </div>
    </footer>
  );
}
