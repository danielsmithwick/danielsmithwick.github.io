// ─── Add your YouTube videos here ────────────────────────────────────────────
// To get a video ID: open the video on YouTube, copy the part after "v=" in the URL
// e.g. youtube.com/watch?v=dQw4w9WgXcQ  →  id: 'dQw4w9WgXcQ'
//
// Channels:
//   https://www.youtube.com/@thejasminebaytenants
//   https://www.youtube.com/@interactivedesigncognition551
const videos = [
  // Add your robot/project videos below — replace the id values with real YouTube video IDs
  // Example:
  // {
  //   id: 'dQw4w9WgXcQ',
  //   title: 'My Robot Demo',
  //   channel: 'Interactive Design Cognition',
  // },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function Videos() {
  if (videos.length === 0) return null

  return (
    <section id="videos" className="videos">
      <div className="container">
        <p className="section-label">YouTube</p>
        <h2>Robotics Videos</h2>
        <p className="videos-subtitle">Selected work from the lab and classroom.</p>
        <div className="videos-grid">
          {videos.map((video) => (
            <div className="video-card" key={video.id}>
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="video-card-info">
                <h3>{video.title}</h3>
                {video.channel && <p>{video.channel}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
