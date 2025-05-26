import { useState, useEffect } from 'react'

export function BudgetFilter({ onSetBudget, onClose, initialSelected = '' }) {
  const [selected, setSelected] = useState(initialSelected)
  const [customMin, setCustomMin] = useState('')
  const [customMax, setCustomMax] = useState('')

  useEffect(() => {
    if (initialSelected !== 'custom') {
      setCustomMin('')
      setCustomMax('')
    }
  }, [initialSelected])

  const options = {
    value: { min: 0, max: 50, label: 'Value (Under ₪50)' },
    mid: { min: 50, max: 100, label: 'Mid-range (₪50–₪100)' },
    high: { min: 100, max: Infinity, label: 'High-end (₪100 & Above)' },
    custom: {}
  }

  const onApply = () => {
    let min = 0, max = Infinity, label = '', key = selected

    if (!selected) return // prevent empty apply

    if (selected === 'custom') {
      min = Number(customMin) || 0
      max = Number(customMax) || Infinity
      label = `₪${min} - ₪${max}`
    } else {
      min = options[selected].min
      max = options[selected].max
      label = options[selected].label
    }

    onSetBudget({ min, max, label, key })
    onClose()
  }

  const onClear = () => {
    setSelected('')
    setCustomMin('')
    setCustomMax('')
    onSetBudget({ min: null, max: null, label: '', key: '' })
    onClose()
  }

  return (
    <div className="filter-popup">
      {Object.entries(options).map(([key, val]) => (
        <label key={key}>
          <input
            type="radio"
            name="budget"
            checked={selected === key}
            onChange={() => setSelected(key)}
          />
          {val.label || 'Custom'}
        </label>
      ))}

      {selected === 'custom' && (
        <div className="custom-range">
          <input
            type="number"
            placeholder="Min"
            value={customMin}
            onChange={(e) => setCustomMin(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            value={customMax}
            onChange={(e) => setCustomMax(e.target.value)}
          />
        </div>
      )}

      <div className="popup-actions">
        <button onClick={onClear}>Clear all</button>
        <button onClick={onApply} disabled={!selected}>Apply</button>
      </div>
    </div>
  )
}
