import { useState } from 'react'

export function DeliveryTimeFilter({ onSetDeliveryTime, onClose }) {
  const [selected, setSelected] = useState('')

  const options = {
    '24h': '24 Hours',
    '3d': 'Up to 3 Days',
    '7d': 'Up to 7 Days',
    'any': 'Anytime'
  }

  const onApply = () => {
    onSetDeliveryTime(selected)
    onClose()
  }

  const onClear = () => {
    setSelected('')
    onSetDeliveryTime('')
    onClose()
  }

  return (
    <div className="filter-popup">
      {Object.entries(options).map(([key, label]) => (
        <label key={key}>
          <input
            type="radio"
            name="delivery"
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
