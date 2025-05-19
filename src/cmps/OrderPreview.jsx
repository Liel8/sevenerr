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






// import React from 'react'

// export function OrderPreview({ order, mode, onAction }) {
//   const orderDate = new Date(order.createdAt).toLocaleDateString()
//   const dueOn     = new Date(order.createdAt + order.daysToMake * 86400000).toLocaleDateString()

//   const statusClass = order.status === 'fulfilled'
//     ? 'fulfilled-label'
//     : order.status === 'cancelled'
//       ? 'rejected-label'
//       : ''

//   return (
//     <tr>
//       <td>
//         <div className="user-with-img">
//           <img src={order.gig.imgUrl} alt={order.gig.title} />
//           <span className="order-title">{order.gig.title}</span>
//         </div>
//       </td>
//       <td>{orderDate}</td>
//       <td>{dueOn}</td>
//       <td>₪{order.packagePrice.toFixed(2)}</td>
//       <td>
//         {mode === 'buyer' && (
//           <span className={`label ${statusClass}`}>
//             {order.status}
//           </span>
//         )}
//         {mode === 'seller' && (
//           <select
//             value={order.status}
//             onChange={e => onAction({ ...order, status: e.target.value })}
//           >
//             {order.status === 'accepted' && (
//               <>
//                 <option value="accepted" disabled>
//                   Select…
//                 </option>
//                 <option value="pending">In Process</option>
//                 <option value="fulfilled">Completed</option>
//                 <option value="cancelled">Rejected</option>
//               </>
//             )}
//             {order.status === 'pending' && (
//               <>
//                 <option value="pending" disabled>
//                   In Process
//                 </option>
//                 <option value="fulfilled">Completed</option>
//                 <option value="cancelled">Rejected</option>
//               </>
//             )}
//             {order.status === 'fulfilled' && (
//               <option value="fulfilled" disabled>
//                 Completed
//               </option>
//             )}
//             {order.status === 'cancelled' && (
//               <option value="cancelled" disabled>
//                 Rejected
//               </option>
//             )}
//           </select>
//         )}
//       </td>
//       {mode === 'buyer' && (
//         <td>
//           <button
//             className="order-again-btn"
//             onClick={() => onAction(order)}
//           >
//             Order Again
//           </button>
//         </td>
//       )}
//     </tr>
//   )
// }



// import React from 'react'

// export function OrderPreview({ order, mode, onAction }) {
//   const orderDate = new Date(order.createdAt).toLocaleDateString()
//   const dueOn = new Date(order.createdAt + order.daysToMake * 86400000).toLocaleDateString()


//   const isFulfilled = order.status === 'fulfilled'
//   const isPending   = order.status === 'pending'
//   const isAccepted  = order.status === 'accepted'

//   return (
//     <tr>
//       <td>
//         <div className="user-with-img">
//           <img src={order.gig.imgUrl} alt={order.gig.title} />
//           <span className="order-title">{order.gig.title}</span>
//         </div>
//       </td>
//       <td>{orderDate}</td>
//       <td>{dueOn}</td>
//       <td>₪{order.packagePrice.toFixed(2)}</td>
//       <td>
//         <span className={`label ${
//           order.status === 'fulfilled' ? 'fulfilled-label' : ''
//         } ${
//           order.status === 'cancelled' ? 'rejected-label' : ''
//         }`}>{order.status}</span>
//       </td>
//       <td>
//         {mode === 'buyer' && (
//           <button className="order-again-btn" onClick={() => onAction(order)}>
//             Order Again
//           </button>
//         )}
//         {mode === 'seller' && (() => {
//           switch (order.status) {
//             case 'fulfilled':
//               return (
//                 <select value="fulfilled" disabled>
//                   <option value="fulfilled">Completed</option>
//                 </select>
//               )
//             case 'cancelled':
//               return (
//                 <select value="cancelled" disabled>
//                   <option value="cancelled">Rejected</option>
//                 </select>
//               )
//             case 'pending':
//               return (
//                 <select
//                 value={order.status}
//                   onChange={e => onAction({ ...order, status: e.target.value })}
//                 >
//                   <option value="pending" disabled>
//                     In Process
//                   </option>
//                   <option value="fulfilled">Completed</option>
//                   <option value="cancelled">Rejected</option>
//                 </select>
//               )
//             case 'accepted':
//             default:
//               return (
//                 <select
//                   defaultValue=""
//                   onChange={e => onAction({ ...order, status: e.target.value })}
//                 >
//                   <option value="accepted" disabled>
//                     Select…
//                   </option>
//                   <option value="pending">In Process</option>
//                   <option value="fulfilled">Completed</option>
//                   <option value="cancelled">Rejected</option>
//                 </select>
//               )
//           }
//         })()}
//       </td>
//     </tr>
//   )
// }