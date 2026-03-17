// To add a new project, add an object to the projects array below.
// For images: place the image file in the public/ folder and set image to '/your-image.jpg'
// Set image to null to show no image.
const projects = [
  {
    title: 'AI in Manufacturing',
    description:
      'We built an AI digital twin of the Boston Tech Center that can simulate and control the machines and robots in our facility.',
    image: null,
    links: [
      { label: 'View Project', href: '#' },
    ],
  },
  {
    title: 'Generative Assembly Design',
    description:
      'A project focused on using generative design principles to create innovative assembly solutions.',
    image: null,
    links: [
      { label: 'View Project', href: '#' },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.links.map((link) => (
                  <a key={link.label} href={link.href} className="project-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
