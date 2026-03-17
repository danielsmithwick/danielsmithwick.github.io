import { useState, useMemo, useRef, useCallback } from 'react'
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
  const tiles = useMemo(() => {
    const bio = activeTiles.find(t => t.type === 'bio')
    const rest = shuffle(activeTiles.filter(t => t.type !== 'bio'))
    const insertAt = Math.floor(Math.random() * 16)
    rest.splice(insertAt, 0, bio)
    return rest
  }, [])

  const [selected, setSelected] = useState(null)
  const [expandedId, setExpandedId] = useState(null)
  const [contractingId, setContractingId] = useState(null)
  const timerRef = useRef(null)

  const handleMouseEnter = useCallback((tile) => {
    if (tile.type === 'bio') return
    if (timerRef.current) clearTimeout(timerRef.current)
    setContractingId(null)
    setExpandedId(tile.id)
  }, [])

  const handleMouseLeave = useCallback((tile) => {
    if (tile.type === 'bio') return
    setContractingId(tile.id)
    timerRef.current = setTimeout(() => {
      setExpandedId(null)
      setContractingId(null)
    }, 340)
  }, [])

  return (
    <>
      <div className="grid">
        {tiles.map((tile) => {
          const isBio = tile.type === 'bio'
          const isExpanded = expandedId === tile.id
          const isContracting = contractingId === tile.id
          const displaySize = (!isBio && isExpanded) ? 'lg' : (tile.size || 'sm')
          const animClass = isExpanded && !isContracting ? 'tile--expanding'
                          : isContracting ? 'tile--contracting'
                          : ''
          return (
            <div
              key={tile.id}
              className={`tile tile--${displaySize} ${animClass}`}
              onMouseEnter={() => handleMouseEnter(tile)}
              onMouseLeave={() => handleMouseLeave(tile)}
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
          )
        })}
      </div>

      {selected && (
        <Modal tile={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
