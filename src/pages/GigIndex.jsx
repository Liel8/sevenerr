// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { GigList } from '../cmps/GigList';
// import { gigService } from '../services/gig';
// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service';
// import { removeGig, addGig, updateGig } from '../store/actions/gig.actions';

// import { useParams } from 'react-router-dom';

// export function GigIndex() {
//     const { categoryName } = useParams(); // קבלת שם הקטגוריה מה-URL
//     const gigs = useSelector(storeState => storeState.gigModule.gigs);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         loadGigs(categoryName); // נוסיף את שם הקטגוריה כפרמטר
//     }, [categoryName]);

//     async function loadGigs(categoryName) {
//         try {
//             const gigData = await gigService.query({ category: categoryName }); // מסננים לפי קטגוריה
//             console.log('Loaded gigs:', gigData);
//             dispatch({ type: 'SET_GIGS', gigs: gigData });
//         } catch (err) {
//             console.error('Cannot load gigs', err);
//             showErrorMsg('Error loading gigs');
//         }
//     }

//     async function onRemoveGig(gigId) {
//         try {
//             await removeGig(gigId);
//             showSuccessMsg('Gig removed');
//         } catch (err) {
//             showErrorMsg('Cannot remove gig');
//         }
//     }

//     async function onAddGig() {
//         const title = prompt('Gig title?');
//         const price = +prompt('Set price?');

//         if (!title || isNaN(price) || price <= 0) {
//             showErrorMsg('Invalid gig details');
//             return;
//         }

//         const gig = gigService.getEmptyGig();
//         gig.title = title;
//         gig.price = price;
//         gig.owner = {
//             fullname: prompt('Owner name?') || 'Unknown',
//             imgUrl: 'https://example.com/default-img.jpg', // תמונה ברירת מחדל
//             level: 'basic',
//             rate: 0
//         };

//         try {
//             const savedGig = await addGig(gig);
//             showSuccessMsg(`Gig added (id: ${savedGig._id})`);
//         } catch (err) {
//             showErrorMsg('Cannot add gig');
//         }
//     }

//     async function onUpdateGig(gig) {
//         const price = +prompt('New price?', gig.price);
//         if (isNaN(price) || price <= 0 || price === gig.price) return;

//         const gigToSave = { ...gig, price };
//         try {
//             const savedGig = await updateGig(gigToSave);
//             showSuccessMsg(`Gig updated, new price: ${savedGig.price}`);
//         } catch (err) {
//             showErrorMsg('Cannot update gig');
//         }
//     }


import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GigList } from '../cmps/GigList';
import { GigFilter } from '../cmps/GigFilter';
import { gigService } from '../services/gig';
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service';
import { removeGig, addGig, updateGig } from '../store/actions/gig.actions';
import { useParams } from 'react-router-dom';

export function GigIndex() {
    const { categoryName } = useParams(); // מקבלים את הקטגוריה מה-URL
    const gigs = useSelector(storeState => storeState.gigModule.gigs);
    const dispatch = useDispatch();

    // פונקציה להמרת הקטגוריה מה-URL לערך שמתאים ל-data
    function mapCategory(urlCategory) {
        if (!urlCategory) return '';
        // מסירים את המילה "category" (case-insensitive)
        const withoutPrefix = urlCategory.replace(/^category/i, '');
        // מחזירים את המחרוזת עם אות ראשונה גדולה
        return withoutPrefix.charAt(0).toUpperCase() + withoutPrefix.slice(1);
    }

    // state עבור הפילטר – מעדכנים את הקטגוריה הממופה
    const [filterBy, setFilterBy] = useState({ category: mapCategory(categoryName) });

    // עדכון הפילטר בעת שינוי הפרמטר ב-URL
    useEffect(() => {
        setFilterBy({ category: mapCategory(categoryName) });
    }, [categoryName]);

    // קריאה לטעינת הגיגים עם הפילטר המעודכן
    useEffect(() => {
        async function loadGigs(filter) {
            try {
                console.log('Fetching gigs with filter:', filter);
                const gigData = await gigService.query(filter);
                dispatch({ type: 'SET_GIGS', gigs: gigData });
            } catch (err) {
                console.error('Cannot load gigs', err);
                showErrorMsg('Error loading gigs');
            }
        }
        loadGigs(filterBy);
    }, [filterBy, dispatch]);

    async function onRemoveGig(gigId) {
        try {
            await removeGig(gigId);
            showSuccessMsg('Gig removed');
        } catch (err) {
            showErrorMsg('Cannot remove gig');
        }
    }

    async function onAddGig() {
        const title = prompt('Gig title?');
        const price = +prompt('Set price?');
        if (!title || isNaN(price) || price <= 0) {
            showErrorMsg('Invalid gig details');
            return;
        }
        const gig = gigService.getEmptyGig();
        gig.title = title;
        gig.price = price;
        gig.owner = {
            fullname: prompt('Owner name?') || 'Unknown',
            imgUrl: 'https://example.com/default-img.jpg',
            level: 'basic',
            rate: 0
        };
        try {
            const savedGig = await addGig(gig);
            showSuccessMsg(`Gig added (id: ${savedGig._id})`);
        } catch (err) {
            showErrorMsg('Cannot add gig');
        }
    }

    async function onUpdateGig(gig) {
        const price = +prompt('New price?', gig.price);
        if (isNaN(price) || price <= 0 || price === gig.price) return;
        const gigToSave = { ...gig, price };
        try {
            const savedGig = await updateGig(gigToSave);
            showSuccessMsg(`Gig updated, new price: ${savedGig.price}`);
        } catch (err) {
            showErrorMsg('Cannot update gig');
        }
    }

    console.log('Redux store gigs:', gigs);
    console.log('🔍 Calling loadGigs with:', filterBy);

    return (
        <section className="gig-index main-layout full">
            <article className="bread-crumbs">
                <a className="home" href="/">
                    <img className="home-icon" src="" alt="Home" title="Go to homepage" />
                </a>
                <span className="divider">/</span>
                <a title="Graphics & Design Category" href="/gig">{filterBy.category || 'All Gigs'}</a>
            </article>

            <GigFilter filterBy={filterBy} setFilterBy={setFilterBy} />
            <h1 className="category-header">{filterBy.category || 'All Gigs'}</h1>
            <p className="category-sub-header">Your brand's visual identity elevated to perfection.</p>

            <section className="filter-btns-container full main-layout">
                <section className="filter-btns">
                    <div className="btns-container">
                        <button className="filter-btn">
                            Options
                            <span className="icon fa-solid angle-down" aria-hidden="true"></span>
                        </button>
                        <button className="filter-btn">
                            Seller details
                            <span className="icon fa-solid angle-down" aria-hidden="true"></span>
                        </button>
                        <button className="filter-btn">
                            Budget
                            <span className="icon fa-solid angle-down" aria-hidden="true"></span>
                        </button>
                        <button className="filter-btn">
                            Delivery time
                            <span className="icon fa-solid angle-down" aria-hidden="true"></span>
                        </button>
                    </div>
                </section>
            </section>

            <div className="top-of-gigs">
                <div className="number-of-results">{gigs.length} services available</div>
                <label className="sort-container">
                    <span className="sort-title">Sort by:</span>
                    <span className="drop-down-btn">Recommended</span>
                </label>
            </div>

            <section className="gig-list-wrapper">
                <GigList 
                    gigs={gigs} 
                    onRemoveGig={onRemoveGig} 
                    onAddGig={onAddGig} 
                    onUpdateGig={onUpdateGig} 
                />
            </section>

            <ul className="pagination flex">
                <li className="pagination-arrows first-page disabled">
                    <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
                </li>
                <li className="page-number active">
                    <span>1</span>
                </li>
                <li className="page-number">
                    <span>2</span>
                </li>
                <li className="pagination-arrows last-page">
                    <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </li>
            </ul>
        </section>
    );
}



