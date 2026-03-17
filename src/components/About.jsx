const bio = `I'm a Research Manager at Autodesk with a PhD in Design and Computation from MIT, where I studied how designers use their bodies and hands to think — and how robotics could enhance that embodied intelligence.

My career spans robotics, digital fabrication, autonomous vehicles, and AI research. I've worked at Amazon Robotics, Universal Robots, Optimus Ride, and the MIT Media Lab. At Autodesk I lead research at the intersection of AI, manufacturing, and human-robot collaboration.

I'm driven by one question: how do we design better tools for people who build things?`

const focusAreas = [
  'Human–Robot Collaboration',
  'AI in Manufacturing',
  'Digital Fabrication',
  'Embodied Design Cognition',
  'Autonomous Systems',
  'Research Management',
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <p className="section-label">Background</p>
        <h2>About Me</h2>
        <div className="about-grid">
          <p>{bio}</p>
          <div className="focus-areas">
            <h3>Areas of Focus</h3>
            <ul>
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
