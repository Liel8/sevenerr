import React, { useState, useEffect } from 'react'

export function OptionsFilter({ availableOptions = [], initialSelected = '', onSetOption, onClose }) {
  const [selected, setSelected] = useState(initialSelected)

  useEffect(() => {
    setSelected(initialSelected)
  }, [initialSelected])

  const handleApply = () => {
    onSetOption(selected)
    onClose()
  }

  const handleClear = () => {
    setSelected('')
    onSetOption('')
    onClose()
  }

  return (
    <div className="filter-popup">
      <ul className="options-list">
        {availableOptions.map(option => (
          <li key={option} className={selected === option ? 'selected' : ''}>
            <label>
              <input
                type="radio"
                name="options"
                value={option}
                checked={selected === option}
                onChange={() => setSelected(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <div className="popup-actions">
        <button type="button" onClick={handleClear}>Clear all</button>
        <button type="button" onClick={handleApply} disabled={!selected}>Apply</button>
      </div>
    </div>
  )
}
