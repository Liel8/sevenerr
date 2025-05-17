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



// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { loadOrders } from '../store/actions/orders.actions'
// import { OrdersTable } from '../cmps/OrdersTable'

// export function OrdersPage() {
//   const user   = useSelector(state => state.userModule.user)
//   const orders = useSelector(state => state.orderModule.orders)
//   const [filter, setFilter] = useState('ALL')
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (user?._id) loadOrders(user._id)
//   }, [user])

//   const filtered = orders.filter(order => {
//     switch (filter) {
//       case 'ACTIVE': return order.status === 'pending'
//       case 'DELIVERED': return order.status === 'delivered'
//       case 'COMPLETED': return ['fulfilled','approved'].includes(order.status)
//       case 'CANCELLED': return order.status === 'cancelled'
//       default: return true
//     }
//   })

//   function handleReorder(order) {
//     navigate(`/gig/details/${order.gig._id}`, { state: { gig: order.gig } })
//   }

//   return (
//     <section className="orders-page main-layout">
//       <div className="orders-column">
//         <div className="order-header">
//           <h1>Manage Orders</h1>
//           {/* optional buyer-specific controls */}
//         </div>

//         {/* Filter Tabs */}
//         <nav className="orders-tabs">
//           {['ALL','ACTIVE','DELIVERED','COMPLETED','CANCELLED'].map(key => (
//             <button
//               key={key}
//               className={filter===key? 'active':''}
//               onClick={()=>setFilter(key)}
//             >{key}</button>
//           ))}
//         </nav>

//         <OrdersTable
//           orders={filtered}
//           mode="buyer"
//           onAction={handleReorder}
//         />
//       </div>
//     </section>
// )
// }



// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { loadOrders } from '../store/actions/orders.actions';

// export function OrdersPage() {
//   const user = useSelector(state => state.userModule.user);
//   const orders = useSelector(state => state.orderModule.orders);
//   const [filter, setFilter] = useState('ALL');

//   useEffect(() => {
//     if (user && user._id) {
//       loadOrders(user._id);
//     }
//   }, [user]);

//   // Tabs for filtering
//   const tabs = [
//     { key: 'ACTIVE', label: 'Active' },
//     { key: 'MISSING_DETAILS', label: 'Missing Details' },
//     { key: 'DELIVERED', label: 'Delivered' },
//     { key: 'COMPLETED', label: 'Completed' },
//     { key: 'CANCELLED', label: 'Cancelled' },
//     { key: 'ALL', label: 'All' }
//   ];

//   // Filter orders based on status
//   const filteredOrders = orders.filter(order => {
//     switch (filter) {
//       case 'ACTIVE': return order.status === 'pending';
//       case 'MISSING_DETAILS': return order.status === 'missing_details';
//       case 'DELIVERED': return order.status === 'delivered';
//       case 'COMPLETED': return order.status === 'fulfilled' || order.status === 'approved';
//       case 'CANCELLED': return order.status === 'cancelled';
//       default: return true;
//     }
//   })

//   return (
    
//     <section className="orders-page main-layout">
//       <h1 className="orders-header">Manage Orders</h1>

//       <nav className="orders-tabs">
//         {tabs.map(tab => (
//           <button
//             key={tab.key}
//             className={`orders-tab ${filter === tab.key ? 'active' : ''}`}
//             onClick={() => setFilter(tab.key)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </nav>

//       <table className="orders-table">
//         <thead>
//           <tr>
//             <th>Item</th>
//             <th>Order Date</th>
//             <th>Due On</th>
//             <th>Total</th>
//             <th>Status</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredOrders.map(order => {
//             const orderDate = new Date(order.createdAt).toLocaleDateString();
//             const dueOn = new Date(order.createdAt + order.daysToMake * 24 * 60 * 60 * 1000)
//                           .toLocaleDateString();
//             return (
//               <tr key={order._id} className="orders-row">
//                 <td className="order-item">
//                   <img
//                     src={order.gig.imgUrl}
//                     alt={order.gig.title}
//                     className="order-thumb"
//                   />
//                   <span className="order-title">{order.gig.title}</span>
//                 </td>
//                 <td>{orderDate}</td>
//                 <td>{dueOn}</td>
//                 <td>₪{order.packagePrice.toFixed(2)}</td>
//                 <td>
//                   <span className={`order-status ${order.status}`}>{order.status}</span>
//                 </td>
//                 <td>
//                   <button className="order-again-btn">Order Again</button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </section>
//   );
// }
