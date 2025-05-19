import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local'

export function AddGig() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const currentUser = useSelector(state => state.userModule.user)

  const [gigData, setGigData] = useState({
    title: '',
    category: '',
    price: '',
    daysToMake: '',
    description: '',
    imgUrl: '',
    tags: ''
  })

  const handleChange = ({ target }) => {
    const { name, value } = target
    setGigData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async ev => {
    ev.preventDefault()

    if (!currentUser || !currentUser._id) {
      console.error('No user logged in')
      return
    }

    const owner = {
      _id: currentUser._id,
      fullname: currentUser.fullname,
      imgUrl: currentUser.imgUrl,
      level: currentUser.level || 'basic',
      rate: currentUser.rate || 0
    }

    const newGig = {
      title: gigData.title || 'Untitled Gig',
      category: gigData.category || 'General',
      price: gigData.price ? +gigData.price : 0,
      daysToMake: gigData.daysToMake ? +gigData.daysToMake : 7,
      description: gigData.description || 'No description provided.',
      imgUrl: gigData.imgUrl
        ? [gigData.imgUrl]
        : ['https://www.looper.com/img/gallery/phoebe-buffays-friends-timeline-explained/l-intro-1621661137.jpg'],
      tags: gigData.tags
        ? gigData.tags.split(',').map(t => t.trim()).filter(t => t)
        : [],
      owner,
      country: currentUser.country || 'Israel',
      likedByUsers: [],
      reviews: []
    }

    try {
      console.log('▶️ newGig before save:', newGig)

      const savedGig = await gigService.save(newGig)

      console.log('▶️ savedGig after save:', savedGig)

      dispatch({ type: 'ADD_GIG', gig: savedGig })
      navigate('/user/profile')
    } catch (err) {
      console.error('Error adding gig', err)
    }
  }

  return (
    <section className="gig-add main-layout">
      <h2>Add a gig</h2>
      <p className="subheading">Fill the required information and start earning today!</p>
      <div className="gig-add-content">
        <form className="gig-add-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              value={gigData.title}
              onChange={handleChange}
              placeholder="I will..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={gigData.description}
              onChange={handleChange}
              placeholder="Provided service will include..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={gigData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              {[
                'Graphics & Design',
                'Programming & Tech',
                'Digital Marketing',
                'Video & Animation',
                'Writing & Translation',
                'Music & Audio',
                'Business',
                'Data',
                'Photography'
              ].map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags (comma separated)</label>
            <input
              id="tags"
              type="text"
              name="tags"
              value={gigData.tags}
              onChange={handleChange}
              placeholder="tag1, tag2"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price (₪)</label>
            <input
              id="price"
              type="number"
              name="price"
              value={gigData.price}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="daysToMake">Days to Make</label>
            <input
              id="daysToMake"
              type="number"
              name="daysToMake"
              value={gigData.daysToMake}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="imgUrl">Image URL</label>
            <input
              id="imgUrl"
              type="url"
              name="imgUrl"
              value={gigData.imgUrl}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <button type="submit" className="btn-submit">Save Gig</button>
        </form>
      </div>
    </section>
  )
}




// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { addGig } from '../store/actions/gig.actions'

// export function AddGig() {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const [gigData, setGigData] = useState({
//     title: '',
//     category: '',
//     price: '',
//     daysToMake: '',
//     description: '',
//     imgUrl: '',
//     tags: ''
//   })

//   const categories = [
//     'Graphics & Design',
//     'Programming & Tech',
//     'Digital Marketing',
//     'Video & Animation',
//     'Writing & Translation',
//     'Music & Audio',
//     'Business',
//     'Data',
//     'Photography'
//   ]

//   function handleChange({ target }) {
//     const { name, value } = target
//     setGigData(prev => ({ ...prev, [name]: value }))
//   }

//   async function handleSubmit(ev) {
//     ev.preventDefault()

//     // Default fallbacks
//     const defaultImage = 'https://www.looper.com/img/gallery/phoebe-buffays-friends-timeline-explained/l-intro-1621661137.jpg'
//     const defaultDescription = 'No description provided.'
//     const defaultCategory = 'General'
//     const defaultDays = 7
//     const defaultPrice = 0

//     const newGig = {
//       title: gigData.title || 'Untitled Gig',
//       category: gigData.category || defaultCategory,
//       price: gigData.price ? +gigData.price : defaultPrice,
//       daysToMake: gigData.daysToMake ? +gigData.daysToMake : defaultDays,
//       description: gigData.description || defaultDescription,
//       imgUrl: gigData.imgUrl
//         ? [gigData.imgUrl]
//         : [defaultImage],
//       tags: gigData.tags
//         ? gigData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
//         : []
//     }

//     try {
//       await dispatch(addGig(newGig))
//       navigate('/user/profile')
//     } catch (err) {
//       console.error('Error adding gig', err)
//     }
//   }

//   return (
//     <section className="gig-add main-layout">
//       <h2>Add New Gig</h2>
//       <form onSubmit={handleSubmit} className="gig-add-form">
//         {/* Title */}
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={gigData.title}
//             onChange={handleChange}
//             placeholder="Enter gig title"
//           />
//         </label>

//         {/* Category */}
//         <label>
//           Category:
//           <select
//             name="category"
//             value={gigData.category}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select category</option>
//             {categories.map(cat => (
//               <option key={cat} value={cat}>{cat}</option>
//             ))}
//           </select>
//         </label>

//         {/* Price */}
//         <label>
//           Price ($):
//           <input
//             type="number"
//             name="price"
//             value={gigData.price}
//             onChange={handleChange}
//             placeholder="0"
//           />
//         </label>

//         {/* Days to Make */}
//         <label>
//           Days to Make:
//           <input
//             type="number"
//             name="daysToMake"
//             value={gigData.daysToMake}
//             onChange={handleChange}
//             placeholder="7"
//           />
//         </label>

//         {/* Description */}
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={gigData.description}
//             onChange={handleChange}
//             placeholder="Describe your gig..."
//           />
//         </label>

//         {/* Image URL */}
//         <label>
//           Image URL:
//           <input
//             type="text"
//             name="imgUrl"
//             value={gigData.imgUrl}
//             onChange={handleChange}
//             placeholder="https://example.com/image.jpg"
//           />
//         </label>

//         {/* Tags */}
//         <label>
//           Tags (comma-separated):
//           <input
//             type="text"
//             name="tags"
//             value={gigData.tags}
//             onChange={handleChange}
//             placeholder="tag1, tag2, tag3"
//           />
//         </label>

//         <button type="submit" className="btn">
//           Save Gig
//         </button>
//       </form>
//     </section>
//   )
// }

