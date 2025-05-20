import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const popularServices = [
  {
    title: 'Website Development',
    slug: 'website-development',
    moveTo: '',
    category: 'programming-tech',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png'
  },
  {
    title: 'Video Editing',
    slug: 'video-editing',
    moveTo: '',
    category: 'video-animation',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png'
  },
  {
    title: 'Software Development',
    slug: 'software-development',
    moveTo: '',
    category: 'programming-tech',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png'
  },
  {
    title: 'SEO',
    slug: 'seo-services',
    moveTo: '',
    category: 'online-marketing',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png'
  },
  {
    title: 'Architecture & Interior Design',
    slug: 'architectural-design-services',
    moveTo: '',
    category: 'graphics-design',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png'
  },
  {
    title: 'Book Design',
    slug: 'book-design',
    moveTo: '', 
    category: 'graphics-design',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/af48c6702af221956ea7adf0055854e6-1745826082297/Book%20Design.png'
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
    //   search: `?category=${item.category}&txt=${item.moveTo}`
    search: `${item.category}?category=${item.category}`
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
            ›
          </button>
        )}
        {showPrev && (
          <button className="ps-btn prev" onClick={handlePrev}>
            ‹
          </button>
        )}
      </div>
    </section>
  )
}
