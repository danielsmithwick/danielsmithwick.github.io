// ─── Add or edit publications here ───────────────────────────────────────────
const publications = [
  {
    title: 'Designerly Pick and Place: Coding Physical Model Making to Inform Material-Based Robotic Interaction',
    year: '2016',
    venue: 'Design Computing and Cognition',
    description: 'Compares how architects and students use physical blocks, revealing that expert designers experiment more deliberately — with implications for robotic interaction design.',
    thumb: '/images/research-designerly-pick-place.jpg',
    link: 'https://mit.academia.edu/DanielSmithwick',
  },
  {
    title: 'Creative Interaction with Blocks and Robots',
    year: '2016',
    venue: 'CogSci',
    description: 'Architects used significantly fewer block types than novices, revealing selective material usage strategies that can inform creative robotic systems.',
    thumb: '/images/research-creative-interaction.jpg',
    link: 'https://mit.academia.edu/DanielSmithwick',
  },
  {
    title: "Let's Get Physical: Thinking with Things in Architectural Design",
    year: '2015',
    venue: 'CogSci',
    description: 'Studies how tangible objects support design cognition — architects and students both benefit from kinesthetic interaction when exploring design possibilities.',
    thumb: '/images/research-lets-get-physical.jpg',
    link: 'https://mit.academia.edu/DanielSmithwick',
  },
  {
    title: 'Embodied Design Cognition: Action-Based Formalizations in Architectural Design',
    year: '2014',
    venue: 'International Journal of Architectural Computing',
    description: 'Frames design knowledge as formalizable physical actions — arguing that computational tools should exploit embodied cognition rather than purely symbolic approaches.',
    thumb: '/images/research-embodied-cognition.jpg',
    link: 'https://journals.sagepub.com/doi/10.1260/1478-0771.12.4.399',
  },
  {
    title: 'Physical Design Cognition: A Non-Symbolic Formalization for Performing Design Knowledge',
    year: '2013',
    venue: 'SIGraDi',
    description: 'Develops an action-based notation drawing from embodied cognition to formalize design knowledge beyond traditional symbolic representations.',
    thumb: '/images/research-physical-cognition.jpg',
    link: 'https://mit.academia.edu/DanielSmithwick',
  },
  {
    title: 'Designing in Hi-Fi: Digital Fabrication for Physical Computation',
    year: '2012',
    venue: 'Iberoamerican Congress of Digital Graphics',
    description: 'Examines whether digital design tools compress information compared to analog tools — arguing designers are underexposed to raw design signal in physical computation.',
    thumb: '/images/research-designing-hifi.jpg',
    link: 'https://mit.academia.edu/DanielSmithwick',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function Research() {
  return (
    <section id="research" className="research">
      <div className="container">
        <p className="section-label">Academia</p>
        <h2>Publications</h2>
        <div className="research-grid">
          {publications.map((pub) => (
            <div className="research-card" key={pub.title}>
              <img
                src={pub.thumb}
                alt={pub.title}
                className="research-card-thumb"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div className="research-card-body">
                <span className="research-card-year">{pub.year}</span>
                <h3>{pub.title}</h3>
                <p>{pub.description}</p>
                <p className="research-card-venue">{pub.venue}</p>
                <a href={pub.link} className="research-link" target="_blank" rel="noreferrer">
                  Read paper →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
