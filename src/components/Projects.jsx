import { useState, useEffect, useCallback } from 'react'

// ─── Add your projects here ───────────────────────────────────────────────────
// image: URL or path to image in public/ folder (e.g. '/my-image.jpg'), or null
// link:  URL to the project page
// source: label shown on the link button (e.g. 'SCOPES-DF', 'MIT', 'GitHub')
const projects = [
  {
    title: 'AI in Manufacturing — Digital Twin',
    description:
      'Built an AI digital twin of the Boston Tech Center that can simulate and control the machines and robots in our facility.',
    image: null,
    link: '#',
    source: 'Autodesk',
  },
  {
    title: 'Generative Assembly Design',
    description:
      'Using generative design principles to create innovative assembly solutions at the intersection of AI and manufacturing.',
    image: null,
    link: '#',
    source: 'Autodesk',
  },
  {
    title: 'Projecting Geometry for Precision Cutting',
    description:
      'Learn how to make complex and precise geometric assemblies using projection techniques for precision cutting and assembly.',
    image: 'https://www.scopesdf.org/wp-content/uploads/2020/03/IMG_1612.jpg',
    link: 'https://www.scopesdf.org/scopesdf_lesson/unplugged-projecting-geometry-for-precision-cutting/',
    source: 'SCOPES-DF',
  },
  {
    title: 'Finding Fibonacci in the Helicone',
    description:
      'Exploring mathematical patterns through digital fabrication — discovering Fibonacci sequences in the Helicone sculpture.',
    image: 'https://www.scopesdf.org/wp-content/uploads/2018/11/IMG_7337-3.jpg',
    link: 'https://www.scopesdf.org/scopesdf_lesson/finding-fibonacci-in-the-helicone-2/',
    source: 'SCOPES-DF',
  },
  {
    title: 'From Digital to Physical: Geometric Translations',
    description:
      'Workflow between 3D modeling software and planar assembly — bridging digital design and physical fabrication.',
    image: 'https://www.scopesdf.org/wp-content/uploads/2018/10/20181012113048_IMG_0731-1-sm.jpg',
    link: 'https://www.scopesdf.org/scopesdf_lesson/digital-to-physical-translations/',
    source: 'SCOPES-DF',
  },
  {
    title: 'MoMA Digitally Fabricated House',
    description:
      'Contributed to the MIT-designed digitally fabricated house exhibited at the Museum of Modern Art (MoMA) in New York.',
    image: 'https://fabacademy.org/2019/labs/dassault/students/daniel-smithwick/images/momahouse.jpg',
    link: 'https://fabacademy.org/2019/labs/dassault/students/daniel-smithwick/about/',
    source: 'MIT / Fab Academy',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const AUTOPLAY_INTERVAL = 5000 // milliseconds between slides

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % projects.length)
  }, [])

  const prev = () => {
    setCurrent((i) => (i - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, AUTOPLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [paused, next])

  const project = projects[current]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>

        <div
          className="carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous project">
            &#8592;
          </button>

          <div className="carousel-slide">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="carousel-image"
              />
            )}
            <div className="carousel-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link !== '#' && (
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on {project.source}
                </a>
              )}
            </div>
          </div>

          <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next project">
            &#8594;
          </button>
        </div>

        {/* Dot indicators */}
        <div className="carousel-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? ' carousel-dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
