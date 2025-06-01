import { userService } from '../services/user/user.service.remote'
import { GigPreview } from './GigPreview'


export function GigList({ gigs }) {
    return (
        <ul className="gig-list gigs-layout">
            {gigs.map(gig => (
                <GigPreview key={gig._id} gig={gig} />
            ))}
        </ul>
    );
}

