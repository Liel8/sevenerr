import React from 'react'

export function OrderPreview({ order, mode, onAction }) {
  const orderDate = new Date(order.createdAt).toLocaleDateString()
  const dueOn     = new Date(order.createdAt + order.daysToMake * 86400000).toLocaleDateString()

  const rawStatus = (order.status || '').toString().toLowerCase()
  const currentStatus = (rawStatus === 'accepted' || rawStatus === '')
    ? 'pending'
    : rawStatus

  const statusDisplay = {
    pending:   'In Process',
    fulfilled: 'Completed',
    cancelled: 'Rejected'
  }

  const statusClass = currentStatus === 'fulfilled'
    ? 'fulfilled-label'
    : currentStatus === 'cancelled'
      ? 'rejected-label'
      : 'pending-label'

  return (
    <tr>
      <td>
        <div className="user-with-img">
          <img src={order.gig.imgUrl} alt={order.gig.title} />
          <span className="order-title">{order.gig.title}</span>
        </div>
      </td>
      <td>{orderDate}</td>
      <td>{dueOn}</td>
      <td>₪{order.packagePrice.toFixed(2)}</td>
      <td>
        <div className="status-cell">
          {(mode === 'buyer' || (mode === 'seller' && currentStatus !== 'pending')) && (
            <span className={`label ${statusClass}`}>
              {statusDisplay[currentStatus]}
            </span>
          )}
          {mode === 'seller' && currentStatus === 'pending' && (
            <select
              value={currentStatus}
              onChange={e => onAction({ ...order, status: e.target.value })}
            >
              <option value="pending" disabled>
                {statusDisplay.pending}
              </option>
              <option value="fulfilled">
                {statusDisplay.fulfilled}
              </option>
              <option value="cancelled">
                {statusDisplay.cancelled}
              </option>
            </select>
          )}
        </div>
      </td>
      {mode === 'buyer' && (
        <td>
          <button
            className="order-again-btn"
            onClick={() => onAction(order)}
          >
            Order Again
          </button>
        </td>
      )}
    </tr>
  )
}
