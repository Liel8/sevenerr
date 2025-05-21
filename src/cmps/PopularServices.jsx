import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const popularServices = [
  {
    title: 'Website Development',
    moveTo: 'Website',
    category: 'programming-tech',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png'
  },
  {
    title: 'Video Editing',
    moveTo: 'Video',
    category: 'video-animation',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png'
  },
  {
    title: 'Data Entry',
    moveTo: 'data entry',
    category: 'Data',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png'
  },
  {
    title: 'Logo Desing',
    moveTo: 'logo',
    category: 'Graphics & Design',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png'
  },
  {
    title: 'Voice Over',
    moveTo: 'voice',
    category: 'Music & Audio',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png'
  },
  {
    title: 'Translate service',
    moveTo: 'translate', 
    category: 'Writing & Translation',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/af48c6702af221956ea7adf0055854e6-1745826082297/Book%20Design.png'
  },
  {
    title: 'Social Media Marketing',
    moveTo: '',
    category: 'Digital Marketing',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png',
  }
]

export function PopularServices() {
  const navigate = useNavigate()
  const trackRef = useRef(null)
  const [showPrev, setShowPrev] = useState(false)
  const [showNext, setShowNext] = useState(true)

  const goToCategory = item => {
    navigate({
      pathname: '/gig/',
      search: `?category=${item.category}&txt=${item.moveTo}`
    // search: `${item.category}?category=${item.category}`
    })
  }

  const scrollAmount = () => trackRef.current?.clientWidth || 240

  const handleNext = () => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: scrollAmount(), behavior: 'smooth' })
    setShowNext(false)
    setShowPrev(true)
  }

  const handlePrev = () => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: -scrollAmount(), behavior: 'smooth' })
    setShowPrev(false)
    setShowNext(true)
  }

  return (
    <section className="popular-services">
      <h2 className="ps-title">Popular services</h2>
      <div className="ps-slider-wrapper">
        <div className="ps-slides-track" ref={trackRef}>
          {popularServices.map(item => (
            <div
              key={item.slug}
              className="ps-slide"
              onClick={() => goToCategory(item)}
            >
              <div className="ps-card">
                <h3 className="ps-card-title">{item.title}</h3>
                <img
                  className="ps-card-img"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
        {showNext && (
          <button className="ps-btn next" onClick={handleNext}>
          <svg width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" fill="#62646A"/>
          </svg>
          </button> 
        )}
        {showPrev && (
          <button className="ps-btn prev" onClick={handlePrev}>
          <svg width="8" height="15" viewBox="0 0 8 15" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.2279 0.690653L7.84662 1.30934C7.99306 1.45578 7.99306 1.69322 7.84662 1.83968L2.19978 7.5L7.84662 13.1603C7.99306 13.3067 7.99306 13.5442 7.84662 13.6907L7.2279 14.3094C7.08147 14.4558 6.84403 14.4558 6.69756 14.3094L0.153374 7.76518C0.00693607 7.61875 0.00693607 7.38131 0.153374 7.23484L6.69756 0.690653C6.84403 0.544184 7.08147 0.544184 7.2279 0.690653Z" fill="#62646A"/>
          </svg>
        </button>
        )}
      </div>
    </section>
  )
}

