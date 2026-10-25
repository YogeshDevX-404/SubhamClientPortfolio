import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
import SkillGroup from './components/SkillGroup.jsx';
import TrainingItem from './components/TrainingItem.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Reveal from './components/Reveal.jsx';
import About from './components/About.jsx';
import Marquee from './components/Marquee.jsx';
import { profile, skills, training, projects, projectCategories, education } from './data/content.js';

export default function App() {
  return (
    <div id="top">
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero p={profile} />
        <Marquee items={profile.core} />
        <About />
        <Section id="skills" kicker="02 — Skills" title="Technical toolkit">
          <Reveal className="grid skills">{skills.map((s) => <SkillGroup key={s.title} {...s} />)}</Reveal>
        </Section>
        <Section id="training" kicker="04 — Training" title="Hands-on network and IT infrastructure training">
          <Reveal className="stack">{training.map((t) => <TrainingItem key={t.title} t={t} />)}</Reveal>
        </Section>
        <Projects projects={projects} categories={projectCategories} />
        <Section id="education" kicker="05 — Education" title="Academic foundation">
          <Reveal className="stack">
            {education.map((e) => (
              <article className="entry" key={e.title}>
                <h3>{e.title}</h3>
                <p className="meta">{e.org} · {e.period}</p>
                <p>{e.result}</p>
              </article>
            ))}
          </Reveal>
        </Section>
        <Contact p={profile} />
      </main>
      <Footer p={profile} />
    </div>
  );
}
