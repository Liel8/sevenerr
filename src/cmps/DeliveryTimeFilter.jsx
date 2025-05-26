import { useState, useEffect } from 'react'

export function DeliveryTimeFilter({ selected, onSetDeliveryTime, onClose }) {
  const [localSelected, setLocalSelected] = useState(selected || '')

  useEffect(() => {
    setLocalSelected(selected || '')
  }, [selected])

  const options = {
    '24h': '24 Hours',
    '3d': 'Up to 3 Days',
    '7d': 'Up to 7 Days',
    'any': 'Anytime'
  }

  const onApply = () => {
    onSetDeliveryTime(localSelected, options[localSelected])
    onClose()
  }

  const onClear = () => {
    setLocalSelected('')
    onSetDeliveryTime('', '')
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
