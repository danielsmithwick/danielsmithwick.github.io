import { useState, useMemo } from 'react'
import Modal from './Modal'
import { activeTiles } from '../data/tiles'

function shuffle(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const TYPE_ICONS = {
  paper: '📄',
  video: '▶',
  bio: '',
  career: '💼',
}

export default function Grid() {
  // shuffle once per page load — different order every visit
  const tiles = useMemo(() => shuffle(activeTiles), [])
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div className="grid">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className={`tile tile--${tile.size || 'sm'}`}
            onClick={() => setSelected(tile)}
          >
            {tile.image ? (
              <img src={tile.image} alt={tile.title} className="tile-bg" />
            ) : (
              <div
                className="tile-color"
                style={{ background: tile.color || '#1e293b' }}
              />
            )}

            <div className="tile-overlay">
              <div className="tile-overlay-inner">
                <span className="tile-tag">
                  {TYPE_ICONS[tile.type] ? `${TYPE_ICONS[tile.type]} ` : ''}
                  {tile.tag}
                </span>
                <h3 className="tile-title">{tile.title}</h3>
                {tile.description && (
                  <p className="tile-desc">
                    {tile.description.slice(0, 120)}
                    {tile.description.length > 120 ? '…' : ''}
                  </p>
                )}
              </div>
            </div>

            {tile.type === 'video' && (
              <div className="tile-play-icon">▶</div>
            )}
          </div>
        ))}
      </div>

      {selected && (
        <Modal tile={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
