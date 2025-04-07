export function ReviewPreview({ review }) {
    return (
        <li className="review-preview">
            <div className="review-header">
            <img src={review.flag} alt={review.country} className="flag" />
            <h4>{review.name} from {review.country}</h4>
            </div>
            <p className="review-content">{review.review}</p>
            <small>{review.reviewedAt}</small>
        </li>
    )
  }

// import { Link } from 'react-router-dom'

// export function ReviewPreview({ review }) {
//     const { byUser, aboutUser } = review

//     return <article className="preview review-preview">
//         <p>About: <Link to={`/user/${aboutUser._id}`}>{aboutUser.fullname}</Link></p>
//         <p className="review-by">By: <Link to={`/user/${byUser._id}`}>{byUser.fullname}</Link></p>
//         <p className="review-txt">{review.txt}</p>
//     </article>
// }