import { CategoryList } from "../cmps/CategoryList"
import { PopularServices } from '../cmps/PopularServices'


export function HomePage() {
    return (
        <section>
        <CategoryList />
        <PopularServices />
      </section>
    )
}

