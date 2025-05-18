import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadOrders, addOrder } from '../store/actions/orders.actions'
import { OrdersTable } from '../cmps/OrdersTable'

export function OrdersPage() {
  const user   = useSelector(state => state.userModule.user)
  const orders = useSelector(state => state.orderModule.orders)
  const [filter, setFilter] = useState('ALL')

  useEffect(() => {
    if (user?._id) loadOrders(user._id)
  }, [user])

  const filtered = orders.filter(order => {
    switch (filter) {
      case 'ACTIVE': return order.status === 'pending'
      case 'DELIVERED': return order.status === 'delivered'
      case 'COMPLETED': return ['fulfilled','approved'].includes(order.status)
      case 'CANCELLED': return order.status === 'cancelled'
      default: return true
    }
  })

  function handleReorder(order) {
    const newOrder = {
      _id: Date.now().toString(),
      userId: user._id,
      gig: order.gig,
      packageName: order.packageName,
      packagePrice: order.packagePrice,
      daysToMake: order.daysToMake,
      createdAt: Date.now(),
      status: 'accepted'
    }
    addOrder(newOrder)
      .then(() => {
        // אופציונלי: תציגי toast או אתחול סינון
        setFilter('ALL')
      })
      .catch(err => console.error('Cannot reorder', err))
  }

  return (
    <section className="orders-page main-layout">
      <div className="orders-column">
        <div className="order-header">
          <h1>Manage Orders</h1>
        </div>

        <nav className="orders-tabs">
          {['ALL','ACTIVE','DELIVERED','COMPLETED','CANCELLED']
            .map(key => (
              <button
                key={key}
                className={filter===key? 'active':''}
                onClick={()=>setFilter(key)}
              >{key}</button>
          ))}
        </nav>

        <OrdersTable
          orders={filtered}
          mode="buyer"
          onAction={handleReorder}
        />
      </div>
    </section>
  )
}

