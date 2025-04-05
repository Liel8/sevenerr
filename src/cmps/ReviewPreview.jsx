export function ReviewPreview({ review }) {
    return (
        <section>
            <div class="profile-container">
                <img src="https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696177526/cld-sample.jpg" alt="owner-img" class="owner-profile-img-meduim"/>
                <div class="owner-details">
                    <div class="user-container">
                        <h3 class="user-title">Taylor P</h3>
                        <span class="username">@taylor_paul10</span>
                    </div>
                    <div class="star-wrapper">
                        <span class="star-svg">
                            <img src="/assets/star-grey-4c21a46d.svg" alt="star-svg" class="star"/>
                        </span>
                        <span class="owner-rate">5</span>
                        <span class="owner-number-rates">(224)</span>
                        <span class="divider">|</span>
                        <span class="queue">10 Orders in Queue</span>
                    </div>
                </div>
            </div>
            <li className="review-preview">
                <div className="review-header">
                <img src={review.flag} alt={review.country} className="flag" />
                <h4>{review.name} from {review.country}</h4>
                </div>
                <p className="review-content">{review.review}</p>
                <small>{review.reviewedAt}</small>
            </li>
        </section>
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