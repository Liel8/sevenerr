import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local'

const CLOUD_NAME = 'vanilla-test-images'
const UPLOAD_PRESET = 'stavs_preset'
const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

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
    imgUrls: [],
    tags: ''
  })

  const [imageUploading, setImageUploading] = useState(false)

  const handleChange = ({ target }) => {
    const { name, value } = target
    setGigData(prev => ({ ...prev, [name]: value }))
  }

    const handleFileChange = async ({ target }) => {
    const files = Array.from(target.files)
    if (!files.length) return
    setImageUploading(true)
    try {
      const uploads = await Promise.all(files.map(async file => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', UPLOAD_PRESET)
        const res = await fetch(UPLOAD_URL, { method: 'POST', body: formData })
        const data = await res.json()
        return data.secure_url
      }))
      // צוברים את כל ה־URLs במערך
      setGigData(prev => ({
        ...prev,
        imgUrls: [...prev.imgUrls, ...uploads.filter(url => url)]
      }))
    } catch (err) {
      console.error('Error uploading images', err)
    } finally {
      setImageUploading(false)
    }
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
      level: currentUser.level || '2',
      rate: currentUser.rate || 4
    }

    const newGig = {
      title: gigData.title || 'Untitled Gig',
      category: gigData.category || 'General',
      price: gigData.price ? +gigData.price : 0,
      daysToMake: gigData.daysToMake ? +gigData.daysToMake : 7,
      description: gigData.description || 'No description provided.',
      imgUrl: gigData.imgUrls.length
        ? gigData.imgUrls
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
              placeholder="0"
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

          <div className="form-group file-upload">
            <label className="upload-label" htmlFor="file">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="#62646A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Click or drag to upload</span>
              <input
                id="file"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
            </label>
            {imageUploading && <p>Uploading images...</p>}
            {gigData.imgUrls.length > 0 && (
              <div className="preview">
                {gigData.imgUrls.map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt={`Gig preview ${idx + 1}`}
                    style={{ maxWidth: '150px', margin: '5px' }}
                  />
                ))}
              </div>

            )}
          </div>

          <button type="submit" className="btn-submit" disabled={imageUploading}>
            {imageUploading ? 'Please wait...' : 'Save Gig'}
          </button>
        </form>
      </div>
    </section>
  )
}

