import { categories } from '../assets/data/categoryData.js';
import { Link } from 'react-router-dom';

export function CategoryList() {
  return (
    <div className='category-list-wrapper'>
      <div className='category-list'>
        <ul>
          {categories.map((category) => (
            <li key={category.title}>
              <Link to={`/gigs/${category.title}`}>
                <img src={category.icon} alt={category.title} />
                <h3>{category.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
  