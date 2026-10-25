import { useState } from 'react';
import Section from './Section.jsx';
import ProjectCard from './ProjectCard.jsx';
import Reveal from './Reveal.jsx';
export default function Projects({ projects, categories }) {
  const [cat, setCat] = useState('All');
  const shown = projects.filter((p) => cat === 'All' || p.category === cat);
  return (
    <Section id="projects" kicker="03 — Projects" title="Network labs I’ve built" intro="Lab projects built and verified in simulated environments.">
      <div className="filters" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button key={c} className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <p className="sr" role="status">{shown.length} project{shown.length === 1 ? '' : 's'} shown</p>
      <Reveal className="grid projects">{shown.map((p) => <ProjectCard key={p.title} p={p} />)}</Reveal>
    </Section>
  );
}
