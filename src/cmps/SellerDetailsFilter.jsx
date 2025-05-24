import { useState } from 'react'

export function SellerDetailsFilter({ onSetRateFilter, onClose }) {
  const [selected, setSelected] = useState('')

  const options = {
    'below-3': 'Below 3',
    'above-3': 'Above 3',
    'exact-5': 'Exactly 5'
  }

  const onApply = () => {
    onSetRateFilter(selected)
  }

  const onClear = () => {
    setSelected('')
    onSetRateFilter('')
  }

  return (
    <div className="filter-popup">
      {Object.entries(options).map(([key, label]) => (
        <label key={key}>
          <input
            type="radio"
            name="rate"
            value={key}
            checked={selected === key}
            onChange={() => setSelected(key)}
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
