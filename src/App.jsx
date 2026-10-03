import { useEffect, useState } from 'react'
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiDownload, FiEye, FiExternalLink, FiMenu, FiX, FiCheck } from 'react-icons/fi'
import { profile, contact, skills, projects, showcase, experience, qa, education, certificates } from './data/portfolio.js'

const nav = [['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['experience', 'Experience'], ['testing', 'Testing'], ['certificates', 'Certificates'], ['resume', 'Resume'], ['contact', 'Contact']]

const Section = ({ id, title, children }) => (
  <section id={id} className="section" aria-labelledby={`${id}-h`}>
    <div className="wrap"><h2 id={`${id}-h`}>{title}</h2>{children}</div>
  </section>
)
const Badges = ({ items }) => items.length ? <ul className="badges">{items.map((t) => <li key={t}>{t}</li>)}</ul> : null
const Links = ({ github, demo }) => (github || demo) ? (
  <div className="links">
    {github && <a className="btn sm" href={github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>}
    {demo && <a className="btn sm" href={demo} target="_blank" rel="noreferrer"><FiExternalLink /> Live Demo</a>}
  </div>) : null

export default function App() {
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark')
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])

  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const subject = encodeURIComponent(`Portfolio message from ${f.get('name')}`)
    const body = encodeURIComponent(`${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }
  const year = new Date().getFullYear()

  return (<>
    <a href="#main" className="skip">Skip to content</a>
    <header className="bar">
      <div className="wrap barin">
        <a href="#top" className="logo" aria-label="Home">PG<span>.dev</span></a>
        <nav className={open ? 'open' : ''} aria-label="Main">
          {nav.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <button className="icon" onClick={() => setDark(!dark)} aria-label="Toggle dark mode">{dark ? <FiSun /> : <FiMoon />}</button>
        <button className="icon menu" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <FiX /> : <FiMenu />}</button>
      </div>
    </header>

    <main id="main">
      <section id="top" className="hero">
        <div className="wrap herogrid">
          <div className="intro">
            <p className="hello">Hi, I’m</p>
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="lead">{profile.summary}</p>
            <div className="cta">
              <a className="btn primary" href="#projects">View My Work</a>
              <a className="btn" href={profile.resumeFile} download><FiDownload /> Download Resume</a>
            </div>
          </div>
          <pre className="code" aria-label="Profile summary"><code>
<b>const</b> developer = {'{'}{'\n'}
{'  '}name: <i>'{profile.name}'</i>,{'\n'}
{'  '}experience: <i>'{profile.experience}'</i>,{'\n'}
{'  '}backend: [<i>'PHP'</i>, <i>'Laravel'</i>, <i>'CodeIgniter'</i>, <i>'.NET MVC'</i>],{'\n'}
{'  '}frontend: [<i>'Angular'</i>, <i>'React'</i>, <i>'JavaScript'</i>],{'\n'}
{'  '}database: [<i>'SQL Server'</i>, <i>'MySQL'</i>],{'\n'}
{'}'}</code></pre>
        </div>
      </section>

      <Section id="about" title="About me">
        <div className="two">
          <div>{profile.about.map((p) => <p key={p}>{p}</p>)}</div>
          <div>
            <h3>Learning and development</h3><p>{profile.learning}</p>
            <h3>Education</h3>
            <ul className="plain">{education.map((e) => <li key={e.name}>{e.name}<br /><small>{e.year} · {e.score}</small></li>)}</ul>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid">
          {Object.entries(skills).map(([g, items]) => <article className="card" key={g}><h3>{g}</h3><Badges items={items} /></article>)}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid">
          {projects.map((p) => (
            <article className="card project" key={p.name}>
              <h3>{p.name}</h3><p>{p.description}</p>
              <Badges items={p.tech} />
              <p><strong>My role:</strong> {p.role}</p>
              <ul className="plain ticks">{p.features.map((f) => <li key={f}><FiCheck aria-hidden="true" />{f}</li>)}</ul>
              <Links github={p.github} demo={p.demo} />
            </article>))}
        </div>
        <h3 className="sub">Work showcase</h3>
        <p className="muted">Company projects are described generically. Details will be added where sharing is allowed.</p>
        <div className="grid small">
          {showcase.map((p) => (
            <article className="card" key={p.name}><h4>{p.name}</h4><p>{p.description}</p><Badges items={p.tech} /><Links github={p.github} demo={p.demo} /></article>))}
        </div>
      </Section>

      <Section id="experience" title="Professional experience">
        <ol className="timeline">
          {experience.map((j) => (
            <li key={j.title + j.period}>
              <h3>{j.title}</h3><p className="company">{j.company}</p><p className="period">{j.period}</p>
              <ul>{j.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </li>))}
        </ol>
      </Section>

      <Section id="testing" title="Testing / QA experience">
        <p>Alongside development, I test my own work and the work of the team before release.</p>
        <Badges items={qa} />
      </Section>

      <Section id="certificates" title="Certificates and achievements">
        <div className="grid small">
          {certificates.map((c) => (
            <article className="card" key={c.title}><h4>{c.title}</h4><p>{c.issuer}{c.year && ` · ${c.year}`}</p>
              {c.link && <a className="btn sm" href={c.link} target="_blank" rel="noreferrer"><FiExternalLink /> View</a>}</article>))}
        </div>
      </Section>

      <Section id="resume" title="Resume">
        <div className="cta">
          <a className="btn" href={profile.resumeFile} target="_blank" rel="noreferrer"><FiEye /> Preview</a>
          <a className="btn primary" href={profile.resumeFile} download><FiDownload /> Download Resume</a>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="two">
          <ul className="plain contact">
            <li><FiMail /> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            {contact.linkedin && <li><FiLinkedin /> <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>}
            {contact.github && <li><FiGithub /> <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a></li>}
            {contact.phone && <li><FiPhone /> <a href={`tel:${contact.phone}`}>{contact.phone}</a></li>}
            {contact.showLocation && <li><FiMapPin /> {contact.location}</li>}
          </ul>
          <form onSubmit={submit} className="form">
            <label>Name<input name="name" required autoComplete="name" /></label>
            <label>Email<input name="email" type="email" required autoComplete="email" /></label>
            <label>Message<textarea name="message" rows="4" required /></label>
            <button className="btn primary" type="submit">Send message</button>
            {sent && <p role="status" className="muted">Your email app should open with the message ready to send.</p>}
          </form>
        </div>
      </Section>
    </main>

    <footer className="foot"><div className="wrap"><span>© {year} {profile.name}</span><span>Built with React and Vite</span></div></footer>
  </>)
}
