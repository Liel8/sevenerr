import React from 'react'
import { OrderPreview } from './OrderPreview'

export function OrdersTable({ orders, mode, onAction }) {
  return (
    <table className="order-list">
      <thead>
        <tr>
          <th></th>
          <th>Order Date</th>
          <th>Due On</th>
          <th>Total</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <OrderPreview
            key={order._id}
            order={order}
            mode={mode}
            onAction={onAction}
          />
        ))}
      </tbody>
    </table>
  )
}