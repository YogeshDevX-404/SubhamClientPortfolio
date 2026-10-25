import Section from './Section.jsx';
export default function Contact({ p }) {
  const tel = p.phone.replace(/\s/g, '');
  return (
    <Section id="contact" kicker="06 — Contact" title="Let’s get your network up and running" intro={`${p.availability} based in ${p.location}, available for Network Engineer and NOC Engineer roles. The fastest way to reach me is a call or an email.`}>
      <ul className="contact-list">
        <li><span className="meta">Email</span><a href={`mailto:${p.email}`}>{p.email}</a></li>
        <li><span className="meta">Phone</span><a href={`tel:${tel}`}>{p.phone}</a></li>
        {p.linkedin && <li><span className="meta">LinkedIn</span><a href={p.linkedin} target="_blank" rel="noopener noreferrer">View profile</a></li>}
        <li><span className="meta">Location</span><span>{p.location}</span></li>
        <li><span className="meta">Resume</span><a href={p.resume} download>Download PDF</a></li>
      </ul>
    </Section>
  );
}
