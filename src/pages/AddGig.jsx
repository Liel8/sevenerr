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
      alert('Gig added successfully!')
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
{/* 
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
          </div> */}

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

          {/* <div className="form-group">
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
          </div> */}

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

