import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GigList } from '../cmps/GigList';
import { GigFilter } from '../cmps/GigFilter';
import { gigService } from '../services/gig/gig.service.local';
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service';
import { removeGig, addGig, updateGig, loadGigs } from '../store/actions/gig.actions';
import { useParams, useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom"
import { BudgetFilter } from "../cmps/BudgetFilter"
import { DeliveryTimeFilter } from "../cmps/DeliveryTimeFilter";

export function GigIndex() {
    const [isBudgetOpen, setIsBudgetOpen] = useState(false)
    const [isDeliveryOpen, setIsDeliveryOpen] = useState(false)
    const gigs = useSelector(storeState => storeState.gigModule.gigs);
    const {category} = useParams()
console.log('params:', category);

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
    const [filterBy, setFilterBy] = useState({...gigService.getFilterFromParams(searchParmas, category), sortBy: 'Recommended' });
    const [isSortOpen, setIsSortOpen] = useState(false);

// console.log('search params:', searchParmas);


    // עדכון הפילטר בעת שינוי הפרמטר ב-URL
    // useEffect(() => {
    //     setFilterBy({ category: mapCategory(categoryName) });
    // }, [categoryName]);

    // קריאה לטעינת הגיגים עם הפילטר המעודכן
    useEffect(() => {
    const updateFilter = gigService.getFilterFromParams(searchParmas, category);
    setFilterBy(prev => ({ ...prev, ...updateFilter }));
    }, [category, searchParmas]);
    
    useEffect(() => {
        console.log("category and filter from index:" , category, filterBy);
        loadGigs(filterBy)
        setSearchParams(filterBy, {replace: true})

    }, [filterBy]);



    // function renderSearchParams() {
    //     const filterForParams = {
    //         // minPrice: filterBy.minPrice || 0,
    //         // category: filterBy.category || ''
    //     }
    //     setSearchParams(filterForParams)
    // }



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

    let sortedGigs = [...gigs];

    if (filterBy.minPrice || filterBy.maxPrice) {
        const min = Number(filterBy.minPrice) || 0
        const max = Number(filterBy.maxPrice) || Infinity
        sortedGigs = sortedGigs.filter(gig => {
            const price = Number(gig.price)
            return price >= min && price <= max
        })
    }

    if (filterBy.deliveryTime) {
        const maxDays = {
            '24h': 1,
            '3d': 3,
            '7d': 7,
            'any': Infinity
        }[filterBy.deliveryTime] || Infinity

        sortedGigs = sortedGigs.filter(gig => {
            return Number(gig.daysToMake || Infinity) <= maxDays
        })
        }

    if (filterBy.sortBy === 'recommended') {
    sortedGigs.sort((a, b) => {
        const aScore = (a.owner?.rate || 0) * ((a.reviews?.length || 0) + 1);
        const bScore = (b.owner?.rate || 0) * ((b.reviews?.length || 0) + 1);
        return bScore - aScore;
    });
    } else if (filterBy.sortBy === 'price-low') {
    sortedGigs.sort((a, b) => Number(a.price ?? Infinity) - Number(b.price ?? Infinity));
    } else if (filterBy.sortBy === 'price-high') {
    sortedGigs.sort((a, b) => Number(b.price ?? -Infinity) - Number(a.price ?? -Infinity));
    }
    // console.log('🔍 Prices sorted:', sortedGigs.map(g => g.price));
    // console.log('Raw prices:', gigs.map(g => g.price));
    // console.log('Redux store gigs:', gigs);
    // console.log('🔍 Calling loadGigs with:', filterBy);

    const displayMap = {
        'recommended': 'Recommended',
        'price-high': 'High Price',
        'price-low': 'Low Price'
    };
    useEffect(() => {
        console.log('filterBy updated:', filterBy)
    }, [filterBy])

    return (
        <section className="gig-index main-layout full">
            <div className="bread-crumbs">
                <a className="home" href="/">
                    <img className="home-icon" src="/icons/house-icon.svg" alt="Home" title="Go to homepage" />
                </a>
                <span className="divider">/</span>
                <Link className='link-category' to="/gig">{filterBy.category || 'All Gigs'}</Link>
                {/* <a title="Graphics & Design Category" href="/gig"></a> */}
            </div>

            {/* <GigFilter filterBy={filterBy} setFilterBy={setFilterBy} /> */}
            <h1 className="category-header">{filterBy.category || 'All Gigs'}</h1>
            <p className="category-sub-header">Your brand's visual identity elevated to perfection.</p>

            <section className="filter-btns-container full main-layout">
                <section className="filter-btns">
                    <div className="btns-container">
                        <button className="filter-btn">
                            Options
                            <svg width="12" height="12" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z">
                                </path>
                            </svg>
                        </button>
                        <button className="filter-btn">
                            Seller details
                            <svg width="12" height="12" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z">
                                </path>
                            </svg>
                        </button>
                        <div className="filter-btn-wrapper">
                            <button className="filter-btn" onClick={() => setIsBudgetOpen(prev => !prev)}>
                                Budget
                                <svg width="12" height="12" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" />
                                </svg>
                            </button>

                            {isBudgetOpen && (
                                <BudgetFilter
                                onSetBudget={({ min, max }) => {
                                    setFilterBy(prev => ({
                                    ...prev,
                                    minPrice: min,
                                    maxPrice: max
                                    }))
                                    setIsBudgetOpen(false)
                                }}
                                onClose={() => setIsBudgetOpen(false)}
                                />
                            )}
                        </div>
                        <div className="filter-btn-wrapper">
                            <button className="filter-btn" onClick={() => setIsDeliveryOpen(prev => !prev)}>
                                Delivery time
                                <svg width="12" height="12" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" />
                                </svg>
                            </button>

                            {isDeliveryOpen && (
                                <DeliveryTimeFilter
                                onSetDeliveryTime={(value) => {
                                    setFilterBy(prev => ({
                                    ...prev,
                                    deliveryTime: value
                                    }))
                                    setIsDeliveryOpen(false)
                                }}
                                onClose={() => setIsDeliveryOpen(false)}
                                />
                            )}
                        </div>
                    </div>
                </section>
            </section>

            <div className="top-of-gigs">
                <div className="number-of-results">{gigs.length} services available</div>

                <div className="sort-container">
                    <span className="sort-title">Sort by:</span>

                    <div className="sort-dropdown">
                    <div
                        className="sort-toggle"
                        onClick={() => setIsSortOpen(prev => !prev)}
                    >
                        <span className="sort-selected">
                        {displayMap[filterBy.sortBy] || filterBy.sortBy}
                        </span>
                        <span className="chevron-icon">
                        <svg width="12" height="12" viewBox="0 0 11 7" fill="currentColor">
                            <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" />
                        </svg>
                        </span>
                    </div>

                    {isSortOpen && (
                        <ul className="sort-options">
                        {Object.entries(displayMap).map(([value, label]) => {
                            const isSelected = filterBy.sortBy === value;

                            return (
                            <li
                                key={value}
                                className={isSelected ? 'selected' : ''}
                                onClick={() => {
                                setFilterBy(prev => ({ ...prev, sortBy: value }));
                                setIsSortOpen(false);
                                }}
                            >
                                {isSelected && (
                                <span className="check-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M14.53 4.53 7 12.06 2.47 7.53l1.06-1.06L7 9.94l6.47-6.47z" />
                                    </svg>
                                </span>
                                )}
                                {label}
                            </li>
                            );
                        })}
                        </ul>
                    )}
                    </div>
                </div>
            </div>


            <section className="gig-list-wrapper">
                <GigList 
                    gigs={sortedGigs} 
                    onRemoveGig={onRemoveGig} 
                    onAddGig={onAddGig} 
                    onUpdateGig={onUpdateGig} 
                />
            </section>

            {/* <ul className="pagination flex">
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
            </ul> */}
        </section>
    );
}



