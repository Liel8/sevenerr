import { ReviewList } from '../cmps/ReviewList'

export function ReviewIndex({ reviews }) {
  return (
    <section className="review-index">
      <h2>Reviews</h2>
      {/* <ReviewList reviews={reviews} /> */}
      {reviews && reviews.length > 0 ? (<ReviewList reviews={reviews} />) 
      : (<p className="review-index__no-reviews">There are no reviews yet</p>
      )}
    </section>
  )
}