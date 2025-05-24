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
    const raw = (order.status || '').toString().toLowerCase()
    const currentStatus = (raw === 'accepted' || raw === '') ? 'pending' : raw

    switch (filter) {
      case 'ACTIVE':
        return currentStatus === 'pending'
      case 'COMPLETED':
        return ['fulfilled', 'approved'].includes(currentStatus)
      case 'CANCELLED':
        return currentStatus === 'cancelled'
      default:
        return true
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
      status: 'pending'
    }
    addOrder(newOrder)
      .then(() => setFilter('ALL'))
      .catch(err => console.error('Cannot reorder', err))
  }

  return (
    <section className="orders-page main-layout">
      <div className="orders-column">
        <div className="order-header">
          <h1>Manage Orders</h1>
        </div>

        <nav className="orders-tabs">
          {['ALL','ACTIVE','COMPLETED','CANCELLED'].map(key => (
            <button
              key={key}
              className={filter===key ? 'active' : ''}
              onClick={() => setFilter(key)}
            >
              {key}
            </button>
          ))}
        </nav>
{/* 
        <OrdersTable
          orders={filtered}
          mode="buyer"
          onAction={handleReorder}
        /> */}
        {filtered.length === 0 ? (<p className="no-orders-message">There are no orders in this status</p>)
          : (<OrdersTable
              orders={filtered}
              mode="buyer"
              onAction={handleReorder}/>)
        }
      </div>
    </section>
  )
}


