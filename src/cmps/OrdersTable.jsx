import { OrderPreview } from './OrderPreview'

export function OrdersTable({ orders, mode, onAction }) {
  
  const colsCount = mode === 'buyer' ? 6 : 5

  return (
    <table className="order-list">
      <thead>
        <tr>
          <th></th>
          <th>Order Date</th>
          <th>Due On</th>
          <th>Total</th>
          <th className='th-status'>Status</th>
          {mode === 'buyer' && <th></th>}
        </tr>
      </thead>
      <tbody>
        {orders.length === 0 ? (
          <tr>
            <td colSpan={colsCount} className="no-orders-message">
              No orders in this status to show
            </td>
          </tr>
        ) : (
          orders.map(order => (
            <OrderPreview
              key={order._id}
              order={order}
              mode={mode}
              onAction={onAction}
            />
          ))
        )}
      </tbody>
    </table>
  )
}
