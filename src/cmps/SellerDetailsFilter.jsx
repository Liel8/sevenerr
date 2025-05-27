import { useState, useEffect } from 'react'

export function SellerDetailsFilter({ selected, onSetRateFilter, onClose }) {
  const [localSelected, setLocalSelected] = useState(selected || '')

  useEffect(() => {
    setLocalSelected(selected || '')
  }, [selected])

  const options = {
    'level-1': 'Level 1',
    'level-2': 'Level 2',
    'level-3': 'Level 3',
  }

  const onApply = () => {
    onSetRateFilter(localSelected)
    onClose()
  }

  const onClear = () => {
    setLocalSelected('')
    onSetRateFilter('')
    onClose()
  }

  return (
    <div className="filter-popup">
      {Object.entries(options).map(([key, label]) => (
        <label key={key} className={localSelected === key ? 'active' : ''}>
          <input
            type="radio"
            name="level"
            value={key}
            checked={localSelected === key}
            onChange={() => setLocalSelected(key)}
          />
          {label}
        </label>
      ))}

      <div className="popup-actions">
        <button onClick={onClear}>Clear all</button>
        <button onClick={onApply}>Apply</button>
      </div>
    </div>
  )
}
