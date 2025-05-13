import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function SubHeader() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'          // דף הבית?

  // מצב התצוגה של הסאב־הדר
  const [isStickyVisible, setIsStickyVisible] = useState(false)
  const triggerRef = useRef(null)

  // ‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
  // OBSERVER פועל רק בדף‑הבית
  // ‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
  useEffect(() => {
    if (!isHome) return                // בדפים פנימיים אין צורך ב‑observer

    const observer = new IntersectionObserver(
      ([entry]) => setIsStickyVisible(!entry.isIntersecting),
      { threshold: 0 }
    )

    if (triggerRef.current) observer.observe(triggerRef.current)
    return () => observer.disconnect()
  }, [isHome])

  // האם להציג כרגע?
  const shouldShow = isHome ? isStickyVisible : true

  // מחלקות עיצוב
  const containerCls =
    `sub-header-container main-layout full` +
    (isHome ? ' sticky' : '')          // sticky רק בדף‑הבית

  return (
    <>
      {/* טריגר ל‑observer – נדרש רק בדף הבית */}
      {isHome && <div ref={triggerRef} />}

      {shouldShow && (
        <div className={containerCls}>
          <nav className="category-header">
            <ul className="categories-container">
              {[
                'Graphics & Design',
                'Programming & Tech',
                'Digital Marketing',
                'Video & Animation',
                'Writing & Translation',
                'Music & Audio',
                'Business',
                'Data',
                'Photography',
              ].map(cat => (
                <Link
                  key={cat}
                  className="category-link"
                  to={`/gig/${cat}`}
                >
                  {cat}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
