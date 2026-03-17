import { useState, useEffect, useCallback } from 'react'

// ─── Add or edit projects here ────────────────────────────────────────────────
// image: path from public/ (e.g. '/images/myproject.jpg') or external URL, or null
// link:  URL to the project page (use '#' if none yet)
// source: label for the link button
const projects = [
  {
    title: 'AI in Manufacturing — Digital Twin',
    description:
      'Built an AI digital twin of the Autodesk Boston Tech Center that can simulate and control machines and robots in our facility — enabling predictive maintenance and remote operation.',
    image: null,
    link: '#',
    source: 'Autodesk',
  },
  {
    title: 'Generative Assembly Design',
    description:
      'Using generative design principles to create innovative assembly solutions at the intersection of AI, topology optimisation, and manufacturing constraints.',
    image: null,
    link: '#',
    source: 'Autodesk',
  },
  {
    title: 'How to Train Your Robot — MIT',
    description:
      'Designed and taught a hands-on robotics course at MIT exploring how people physically interact with and teach robots — bridging embodied cognition and machine learning.',
    image: '/images/howtotrain.jpeg',
    link: 'https://fabacademy.org/2019/labs/dassault/students/daniel-smithwick/about/',
    source: 'MIT',
  },
  {
    title: 'MoMA Digitally Fabricated House',
    description:
      'Contributed to the MIT-designed digitally fabricated house exhibited at the Museum of Modern Art (MoMA), New York — involving design, digital fabrication, and on-site assembly.',
    image: '/images/momahouse.jpg',
    link: 'https://fabacademy.org/2019/labs/dassault/students/daniel-smithwick/about/',
    source: 'MIT / Fab Academy',
  },
  {
    title: 'Projecting Geometry for Precision Cutting',
    description:
      'SCOPES-DF lesson teaching complex geometric assemblies using projection techniques — making precision digital fabrication accessible in K-12 classrooms.',
    image: '/images/projecting-geometry.jpg',
    link: 'https://www.scopesdf.org/scopesdf_lesson/unplugged-projecting-geometry-for-precision-cutting/',
    source: 'SCOPES-DF',
  },
  {
    title: 'Finding Fibonacci in the Helicone',
    description:
      'Exploring mathematical patterns through hands-on digital fabrication — discovering Fibonacci sequences in the Helicone sculpture as a gateway to computational thinking.',
    image: '/images/fibonacci-helicone.jpg',
    link: 'https://www.scopesdf.org/scopesdf_lesson/finding-fibonacci-in-the-helicone-2/',
    source: 'SCOPES-DF',
  },
  {
    title: 'From Digital to Physical: Geometric Translations',
    description:
      'Bridging 3D modeling software and planar assembly — a workflow lesson connecting digital design tools to physical fabrication for students and educators.',
    image: '/images/digital-to-physical.jpg',
    link: 'https://www.scopesdf.org/scopesdf_lesson/digital-to-physical-translations/',
    source: 'SCOPES-DF',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const AUTOPLAY_INTERVAL = 5000

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % projects.length)
  }, [])

  const prev = () => setCurrent((i) => (i - 1 + projects.length) % projects.length)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, AUTOPLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [paused, next])

  const project = projects[current]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label">Work</p>
        <h2>Featured Projects</h2>

        <div
          className="carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous">
            &#8592;
          </button>

          <div className="carousel-slide">
            {project.image && (
              <img src={project.image} alt={project.title} className="carousel-image" />
            )}
            <div className="carousel-content">
              <span className="carousel-source">{project.source}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link !== '#' && (
                <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                  View Project →
                </a>
              )}
            </div>
          </div>

          <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next">
            &#8594;
          </button>
        </div>

        <div className="carousel-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? ' carousel-dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
