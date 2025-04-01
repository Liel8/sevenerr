import { categories } from '../assets/data/categoryData.js'
import { Link, useNavigate } from "react-router-dom"

export function CategoryList() {

    return (
        <div className='category-list'>
            <div >
                <div>
                    <div>
                        <div>
                            <ul>
                                {categories.map(category =>
                                    <li key={category.title}>

                                    <Link to={`/gig/${category.title}`}>
                                        <img src={category.icon} alt="" />
                                        <h3>{category.title}</h3>
                                    </Link>

                                    </li>
                                )}
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 

}

            //  <ul>
            //     {categories.map(category =>
            //         <li key={category.title}>

            //         <Link to={`/gig/${category.title}`}>
            //             <img src={category.icon} alt="" />
            //             <h3>{category.title}</h3>
            //         </Link>
            //             <Link to={category.link}> }
            //             { <Link to={"/gig"}>
                        
            //             <img src={category.icon} alt="" />

            //             <h3>{category.title}</h3>
            //             </Link>  
            //         </li>
            //     )}
            // </ul>
       
   



            // .category-list {
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 20px 0;
//     overflow-x: auto; /* מאפשר גלילה אופקית אם אין מספיק מקום */
//   }
  
//   .category-list ul {
//     list-style-type: none;
//     margin: 0;
//     padding: 0;
//     display: flex;
//     flex-wrap: nowrap; /* מונע מעבר שורה – כולם בשורה אחת */
//     gap: 12px; /* מרווח בין הכרטיסים */
//   }
  
//   .category-list li {
//     width: 100px; /* הקטנה מהגדלים הקודמים */
//     background-color: #fff;
//     border: 1px solid #ddd;
//     border-radius: 8px;
//     padding: 8px;  /* הקטנה של המרווח הפנימי */
//     text-align: center;
//     transition: box-shadow 0.3s ease;
//     cursor: pointer;
//   }
  
//   .category-list li:hover {
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   }
  
//   .category-list li img {
//     width: 24px;   /* הקטנת האייקון */
//     height: 24px;
//     margin-bottom: 4px;
//   }
  
//   .category-list li h3 {
//     margin: 0;
//     font-size: 12px;  /* גודל טקסט קטן יותר */
//     color: #333;
//     font-weight: 500;
//   }
  
//   .category-list li a {
//     text-decoration: none;
//     color: inherit;
//     display: block;
//   }
  