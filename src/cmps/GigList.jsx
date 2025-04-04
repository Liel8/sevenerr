import { userService } from '../services/user'
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

