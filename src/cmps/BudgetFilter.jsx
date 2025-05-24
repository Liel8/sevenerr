import { useState } from 'react'

export function BudgetFilter({ onSetBudget, onClose }) {
  const [selected, setSelected] = useState('')
  const [customMin, setCustomMin] = useState('')
  const [customMax, setCustomMax] = useState('')

  const options = {
    value: { min: 0, max: 50 },
    mid: { min: 50, max: 100 },
    high: { min: 100, max: Infinity },
    custom: {}
  }

  const onApply = () => {
    let min = 0, max = Infinity
    if (selected === 'custom') {
      min = Number(customMin) || 0
      max = Number(customMax) || Infinity
    } else if (options[selected]) {
      min = options[selected].min
      max = options[selected].max
    }
    onSetBudget({ min, max })
  }

  const onClear = () => {
    setSelected('')
    setCustomMin('')
    setCustomMax('')
    onSetBudget({ min: 0, max: Infinity })
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
          {key === 'value' && 'Value (Under ₪50)'}
          {key === 'mid' && 'Mid-range (₪50–₪100)'}
          {key === 'high' && 'High-end (₪100 & Above)'}
          {key === 'custom' && 'Custom'}
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
        <button onClick={onApply}>Apply</button>
      </div>
    </div>
  )
}
