import { categories } from '../assets/data/categoryData.js'
import { Link } from "react-router-dom"

export function CategoryList() {
    return (
        // <section>
            <ul>
                {categories.map(category =>
                    <li key={category.title}>
                    <Link to={`/gig/category${category.title}`}>
                        <img src={category.icon} alt="" />
                        <h3>{category.title}</h3>
                    </Link>

                        {/* <Link to={category.link}> */}
                        {/* <Link to={"/gig"}>
                        
                        <img src={category.icon} alt="" />

                        <h3>{category.title}</h3>
                        </Link>   */}
                    </li>
                )}
            </ul>
        /* </section> */
    )
}