export default function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-inner">
          <img
            src="/daniel-smithwick.jpg"
            alt="Daniel Smithwick"
            className="hero-photo"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <div className="hero-text">
            <h1>Daniel Smithwick</h1>
            <p className="hero-title">Research Manager · Autodesk</p>
            <p className="hero-sub">MIT PhD · Robotics · Digital Fabrication · AI</p>
            <div className="hero-actions">
              <a href="#projects" className="cta-button">View Projects</a>
              <a href="#research" className="cta-button-outline">Publications</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
