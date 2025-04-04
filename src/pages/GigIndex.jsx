import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GigList } from '../cmps/GigList';
import { GigFilter } from '../cmps/GigFilter';
import { gigService } from '../services/gig/gig.service.local';
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service';
import { removeGig, addGig, updateGig, loadGigs } from '../store/actions/gig.actions';
import { useParams, useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom"

export function GigIndex() {
    const gigs = useSelector(storeState => storeState.gigModule.gigs);
    const {category} = useParams()

    // פונקציה להמרת הקטגוריה מה-URL לערך שמתאים ל-data
    // function mapCategory(urlCategory) {
    //     if (!urlCategory) return '';
    //     // מסירים את המילה "category" (case-insensitive)
    //     const withoutPrefix = urlCategory.replace(/^category/i, '');
    //     // מחזירים את המחרוזת עם אות ראשונה גדולה
    //     return withoutPrefix.charAt(0).toUpperCase() + withoutPrefix.slice(1);
    // }

    // state עבור הפילטר – מעדכנים את הקטגוריה הממופה
    const [searchParmas, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(gigService.getFilterFromParams(searchParmas, category));

// console.log('search params:', searchParmas);

    // עדכון הפילטר בעת שינוי הפרמטר ב-URL
    // useEffect(() => {
    //     setFilterBy({ category: mapCategory(categoryName) });
    // }, [categoryName]);

    // קריאה לטעינת הגיגים עם הפילטר המעודכן
    useEffect(() => {
        renderSearchParams()
        loadGigs(filterBy)
    }, [filterBy]);



    function renderSearchParams() {
        const filterForParams = {
            minPrice: filterBy.minPrice || 0,
            category: filterBy.category || ''
        }
        setSearchParams(filterForParams)
    }



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
                    <img className="home-icon" src="/icons/house-icon.svg" alt="Home" title="Go to homepage" />
                </a>
                <span className="divider">/</span>
                <Link className='link-category' to="/">{filterBy.category || 'All Gigs'}</Link>
                {/* <a title="Graphics & Design Category" href="/gig"></a> */}
            </article>

            {/* <GigFilter filterBy={filterBy} setFilterBy={setFilterBy} /> */}
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



