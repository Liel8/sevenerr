import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addGig } from '../store/actions/gig.actions'

export function AddGig() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [gigData, setGigData] = useState({
    title: '',
    category: '',
    price: '',
    daysToMake: '',
    description: '',
    imgUrl: '',
    tags: ''
  })

  const categories = [
    'Graphics & Design',
    'Programming & Tech',
    'Digital Marketing',
    'Video & Animation',
    'Writing & Translation',
    'Music & Audio',
    'Business',
    'Data',
    'Photography'
  ]

  const defaultImage = 'https://www.looper.com/img/gallery/phoebe-buffays-friends-timeline-explained/l-intro-1621661137.jpg'
  const defaultDescription = 'No description provided.'
  const defaultCategory = 'General'
  const defaultDays = 7
  const defaultPrice = 0

  function handleChange({ target }) {
    const { name, value } = target
    setGigData(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(ev) {
    ev.preventDefault()

    const newGig = {
      title: gigData.title || 'Untitled Gig',
      category: gigData.category || defaultCategory,
      price: gigData.price ? +gigData.price : defaultPrice,
      daysToMake: gigData.daysToMake ? +gigData.daysToMake : defaultDays,
      description: gigData.description || defaultDescription,
      imgUrl: gigData.imgUrl ? [gigData.imgUrl] : [defaultImage],
      tags: gigData.tags
        ? gigData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        : []
    }

    try {
      await dispatch(addGig(newGig))
      navigate('/user/profile')
    } catch (err) {
      console.error('Error adding gig', err)
    }
  }

  // Prepare preview values
  const preview = {
    title: gigData.title || 'Untitled Gig',
    description: gigData.description || defaultDescription,
    imgUrl: gigData.imgUrl || defaultImage,
    daysToMake: gigData.daysToMake || defaultDays,
    price: gigData.price || defaultPrice
  }

  return (
    <section className="gig-add main-layout">
      <h2>Add a gig</h2>
      <p className="subheading">Fill the required information and start earning today!</p>
      <div className="gig-add-content">
        <form className="gig-add-form" onSubmit={handleSubmit}>
          <div className="form-group upload-images">
            <label>Upload images</label>
            <button type="button" className="upload-btn">
              <i className="fa-solid fa-cloud-arrow-up"></i>
              Upload Image
            </button>
          </div>

          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={gigData.title}
              onChange={handleChange}
              placeholder="I will..."
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={gigData.description}
              onChange={handleChange}
              placeholder="Provided service will include..."
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={gigData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Sub categories</label>
            <input
              type="text"
              name="tags"
              value={gigData.tags}
              onChange={handleChange}
              placeholder="tag1, tag2"
            />
          </div>

          <div className="form-group">
            <label>Price ($)</label>
            <input
              type="number"
              name="price"
              value={gigData.price}
              onChange={handleChange}
              placeholder="0"
            />
          </div>

          <div className="form-group">
            <label>Days to Make</label>
            <input
              type="number"
              name="daysToMake"
              value={gigData.daysToMake}
              onChange={handleChange}
              placeholder="7"
            />
          </div>

          <button type="submit" className="btn-submit">Save Gig</button>
        </form>

        {/* <div className="preview-card">
          <div className="image-container">
            <img src={preview.imgUrl} alt={preview.title} />
          </div>
          <div className="card-body">
            <h3 className="card-title">{preview.title}</h3>
            <p className="card-description">{preview.description}</p>
            <div className="card-meta">
              <div className="days"><i className="fa-regular fa-clock"></i> {preview.daysToMake} Days</div>
              <div className="price">From <span>${preview.price}</span></div>
            </div>
          </div>
        </div> */}
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

