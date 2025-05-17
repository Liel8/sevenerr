import React from 'react'

export function OrderPreview({ order, mode, onAction }) {
  const orderDate = new Date(order.createdAt).toLocaleDateString()
  const dueOn = new Date(order.createdAt + order.daysToMake * 86400000).toLocaleDateString()


  const isFulfilled = order.status === 'fulfilled'
  const isPending   = order.status === 'pending'
  const isAccepted  = order.status === 'accepted'

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
        <span className={`label ${
          order.status === 'fulfilled' ? 'fulfilled-label' : ''
        } ${
          order.status === 'cancelled' ? 'rejected-label' : ''
        }`}>{order.status}</span>
      </td>
      <td>
        {mode === 'buyer' && (
          <button className="order-again-btn" onClick={() => onAction(order)}>
            Order Again
          </button>
        )}
        {mode === 'seller' && (() => {
          switch (order.status) {
            case 'fulfilled':
              return (
                <select disabled defaultValue="fulfilled">
                  <option value="fulfilled">Completed</option>
                </select>
              )
            case 'cancelled':
              return (
                <select disabled defaultValue="cancelled">
                  <option value="cancelled">Rejected</option>
                </select>
              )
            case 'pending':
              return (
                <select
                  defaultValue="pending"
                  onChange={e => onAction({ ...order, status: e.target.value })}
                >
                  <option value="pending" disabled>
                    In Process
                  </option>
                  <option value="fulfilled">Completed</option>
                </select>
              )
            case 'accepted':
            default:
              return (
                <select
                  defaultValue=""
                  onChange={e => onAction({ ...order, status: e.target.value })}
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option value="pending">In Process</option>
                  <option value="fulfilled">Completed</option>
                  <option value="cancelled">Rejected</option>
                </select>
              )
          }
        })()}
      </td>
    </tr>
  )
}