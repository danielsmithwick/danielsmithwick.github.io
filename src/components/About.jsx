// Edit the bio text and skills list below to update the About section.
const bio = `I'm a Research Manager at Autodesk, focused on applied AI research
in manufacturing and design. I recently joined Autodesk to lead research
initiatives at the intersection of AI, robotics, and industrial technology.`

const skills = [
  'Applied AI Research',
  'Manufacturing Technology',
  'Robotics & Digital Twins',
  'Research Management',
  'Generative Design',
  'Cross-functional Leadership',
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p>{bio}</p>
        <div className="skills">
          <h3>Areas of Focus</h3>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
