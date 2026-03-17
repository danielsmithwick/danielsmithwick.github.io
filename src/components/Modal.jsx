import { useEffect } from 'react'

export default function Modal({ tile, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const isVideo = tile.type === 'video' && tile.videoId
  const isBio = tile.type === 'bio'

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal ${isBio ? 'modal--bio' : ''} ${isVideo ? 'modal--video' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        {isVideo && (
          <iframe
            className="modal-video-frame"
            src={`https://www.youtube.com/embed/${tile.videoId}?autoplay=1`}
            title={tile.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {!isVideo && tile.image && (
          <img src={tile.image} alt={tile.title} className="modal-image" />
        )}

        <div className="modal-info">
          <span className="modal-tag">{tile.tag}</span>
          <h2 className="modal-title">{tile.title}</h2>
          <p className="modal-description">{tile.description}</p>
          {tile.link && tile.link !== '#' && (
            <a href={tile.link} className="modal-link" target="_blank" rel="noreferrer">
              View Project →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
