// Update your email address below.
const email = 'daniel.smithwick@autodesk.com'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>Feel free to reach out for opportunities or to say hello!</p>
        <div className="contact-links">
          <a href={`mailto:${email}`} className="contact-link">Email</a>
          <a
            href="https://www.linkedin.com/in/danielsmithwick/"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
