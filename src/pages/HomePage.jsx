import { CategoryList } from "../cmps/CategoryList"
import { PopularServices } from '../cmps/PopularServices'
import { MakeItHappenSection } from '../cmps/MakeItHappenSection'
import { FingertipsSection } from '../cmps/FingertipsSection'

export function HomePage() {
    return (
        <section>
        <CategoryList />
        <PopularServices />
        <MakeItHappenSection />
        <FingertipsSection />
      </section>
    )
}


