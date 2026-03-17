export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} Daniel Smithwick. All rights reserved.</p>
      </div>
    </footer>
  )
}
