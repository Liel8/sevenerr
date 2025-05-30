import { useState, useEffect, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GigList } from '../cmps/GigList';
import { GigFilter } from '../cmps/GigFilter';
// import { gigService } from '../services/gig/gig.service.local';
import { gigService } from "../services/gig/gig.service";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service';
import { removeGig, addGig, updateGig, loadGigs } from '../store/actions/gig.actions';
import { useParams, useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom"
import { BudgetFilter } from "../cmps/BudgetFilter"
import { DeliveryTimeFilter } from "../cmps/DeliveryTimeFilter";
import { SellerDetailsFilter } from "../cmps/SellerDetailsFilter"
import { OptionsFilter } from '../cmps/OptionFilter';

export function GigIndex() {
    const [openFilter, setOpenFilter] = useState(null) // 'options' | 'seller' | 'budget' | 'delivery' | 'sort' | null
    const filterRef = useRef(null)     // עוטף את כל הפילטרים
    const sortRef = useRef(null)

    const gigs = useSelector(storeState => storeState.gigModule.gigs);
    const {category} = useParams()
    console.log('params:', category);

    useEffect(() => {
    function handleClickOutside(event) {
        if (
        filterRef.current &&
        !filterRef.current.contains(event.target) &&
        sortRef.current &&
        !sortRef.current.contains(event.target)
        ) {
        setOpenFilter(null)
        setIsSortOpen(false)
        }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
        document.removeEventListener('mousedown', handleClickOutside)
    }
    }, [])


    // פונקציה להמרת הקטגוריה מה-URL לערך שמתאים ל-data
    // function mapCategory(urlCategory) {
    //     if (!urlCategory) return '';
    //     // מסירים את המילה "category" (case-insensitive)
    //     const withoutPrefix = urlCategory.replace(/^category/i, '');
    //     // מחזירים את המחרוזת עם אות ראשונה גדולה
    //     return withoutPrefix.charAt(0).toUpperCase() + withoutPrefix.slice(1);
    // }

    // state עבור הפילטר – מעדכנים את הקטגוריה הממופה
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState({...gigService.getFilterFromParams(searchParams, category), sortBy: 'recommended' });
    const [isSortOpen, setIsSortOpen] = useState(false);

// console.log('search params:', searchParams);


    // עדכון הפילטר בעת שינוי הפרמטר ב-URL
    // useEffect(() => {
    //     setFilterBy({ category: mapCategory(categoryName) });
    // }, [categoryName]);

    // קריאה לטעינת הגיגים עם הפילטר המעודכן
    useEffect(() => {
        setFilterBy({
            category,
            sortBy: 'recommended',
            tagFilter: '',
            sellerRateFilter: '',
            minPrice: null,
            maxPrice: null,
            budgetLabel: '',
            budgetSelected: '',
            deliveryTime: '',
            deliveryTimeLabel: ''
        });
    }, [category]);

    useEffect(() => {
        const params = gigService.getFilterFromParams(searchParams, category);
        setFilterBy(prev => ({ ...prev, ...params }));
    }, [searchParams]);
    
    useEffect(() => {
        loadGigs(filterBy)
      
        // נמחק את ה-category מהאובייקט שנשלח ל־URL
        const { category: _omit, ...params } = filterBy

        const cleanParams = Object.entries(params)
        .filter(([_, val]) => val !== null && val !== undefined && val !== '')
        .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})

        setSearchParams(cleanParams, { replace: true })
      }, [filterBy])
      



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
            level: 1,
            rate: 1
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

    if (filterBy.tagFilter) {
        const ft = filterBy.tagFilter.toLowerCase();
        sortedGigs = sortedGigs.filter(g =>
            g.tags?.some(tag => tag.toLowerCase().includes(ft))
        );
    }

    const rateLabels = {
        'level-1': 'Level 1',
        'level-2': 'Level 2',
        'level-3': 'Level 3',
    }

    if (filterBy.sellerRateFilter) {

        sortedGigs = sortedGigs.filter(gig => {
            const rate = Number(gig.owner?.level || 0)
            if (filterBy.sellerRateFilter === 'level-1') return rate === 1
            if (filterBy.sellerRateFilter === 'level-2') return rate === 2
            if (filterBy.sellerRateFilter === 'level-3') return rate === 3
            return true
        })
    }

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


    const availableTags = useMemo(
    () => Array.from(new Set((Array.isArray(gigs) ? gigs : []).flatMap(g => g.tags || []))),
    [gigs]
    );

    return (
        <section className="gig-index main-layout full">
            <div className="bread-crumbs">
                <a className="home" href="/">
                    <img className="home-icon" src="/icons/house-icon.svg" alt="Home" title="Go to homepage" />
                </a>
                <span className="divider">/</span>
                <Link className='link-category' to={`/gigs/${filterBy.category}`}>{filterBy.category || 'All Gigs'}</Link>
                {/* <a title="Graphics & Design Category" href="/gigs"></a> */}
            </div>

            {/* <GigFilter filterBy={filterBy} setFilterBy={setFilterBy} /> */}
            <h1 className="category-header">{filterBy.category || 'All Gigs'}</h1>
            <p className="category-sub-header">Your brand's visual identity elevated to perfection.</p>

            <section className="filter-btns-container full main-layout">
                <section className="filter-btns" ref={filterRef} > 
                    <div className="btns-container">

                    {/* OPTIONS */}
                    <div className="filter-btn-wrapper">
                        <button className={`filter-btn ${openFilter === 'options' ? 'open' : ''} ${filterBy.tagFilter ? 'active' : ''}`}
                            onClick={() => setOpenFilter(prev => (prev === 'options' ? null : 'options'))}
                        >
                        Options
                        <svg width="12" height="12" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                            <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" />
                        </svg>
                        </button>
                        {openFilter === 'options' && (
                            <OptionsFilter
                                availableOptions={availableTags}
                                initialSelected={filterBy.tagFilter}
                                onSetOption={tag => setFilterBy(prev => ({ ...prev, tagFilter: tag }))}
                                onClose={() => setOpenFilter(null)}
                            />
                        )}
                    </div>

                    {/* SELLER DETAILS */}
                    <div className="filter-btn-wrapper">
                        <button className={`filter-btn ${openFilter === 'seller' ? 'open' : ''} ${filterBy.sellerRateFilter ? 'active' : ''}`}
                             onClick={() => setOpenFilter(prev => (prev === 'seller' ? null : 'seller'))}
                         >
                        Seller details
                        <svg width="12" height="12" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" />
                        </svg>
                        </button>

                        {openFilter === 'seller' && (
                        <SellerDetailsFilter
                            selected={filterBy.sellerRateFilter}
                            onSetRateFilter={(value) => {
                            setFilterBy(prev => ({
                                ...prev,
                                sellerRateFilter: value
                            }))
                            setOpenFilter(null)
                            }}
                            onClose={() => setOpenFilter(null)}
                        />
                        )}
                    </div>

                    {/* BUDGET */}
                    <div className="filter-btn-wrapper">
                        <button className={`filter-btn ${openFilter === 'budget' ? 'open' : ''} ${filterBy.budgetSelected  ? 'active' : ''}`}
                            onClick={() => setOpenFilter(prev => (prev === 'budget' ? null : 'budget'))}
                         >
                        Budget
                        <svg width="12" height="12" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" />
                        </svg>
                        </button>

                        {openFilter === 'budget' && (
                        <BudgetFilter
                            selectedBudget={filterBy.budgetSelected}
                            onSetBudget={({ min, max, label, key }) => {
                            setFilterBy(prev => ({
                                ...prev,
                                minPrice: min,
                                maxPrice: max,
                                budgetLabel: label,
                                budgetSelected: key
                            }))
                            setOpenFilter(null)
                            }}
                        onClose={() => setOpenFilter(null)}
                        />

                        )}
                    </div>

                    {/* DELIVERY TIME */}
                    <div className="filter-btn-wrapper">
                        <button className={`filter-btn ${openFilter === 'delivery' ? 'open' : ''} ${filterBy.deliveryTime ? 'active' : ''}`}
                            onClick={() => setOpenFilter(prev => (prev === 'delivery' ? null : 'delivery'))}
                        >
                        Delivery time
                        <svg width="12" height="12" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" />
                        </svg>
                        </button>

                        {openFilter === 'delivery' && (
                        <DeliveryTimeFilter
                            selected={filterBy.deliveryTime}
                            onSetDeliveryTime={(value, label) => {
                            setFilterBy(prev => ({
                                ...prev,
                                deliveryTime: value,
                                deliveryTimeLabel: label
                            }))
                            setOpenFilter(null)
                            }}
                            onClose={() => setOpenFilter(null)}
                        />
                        )}
                    </div>

                    </div>
                </section>
            </section>
            
            {(filterBy.tagFilter || filterBy.sellerRateFilter || filterBy.minPrice || filterBy.maxPrice || filterBy.deliveryTime) && (
                <div className="selected-filters-wrapper layout-row">
                    <div className="selected-filters">
                        {filterBy.tagFilter && (
                            <span className="filter-tag">
                                {filterBy.tagFilter}
                                <span className="remove-icon" onClick={() => setFilterBy(prev => ({ ...prev, tagFilter: '' }))}>&times;</span>
                            </span>
                        )}    
                    {filterBy.maxPrice && filterBy.budgetLabel && (
                        <span className="filter-tag">
                            {filterBy.budgetLabel}
                            <span
                            className="remove-icon"
                            onClick={() =>
                                setFilterBy(prev => ({
                                ...prev,
                                minPrice: null,
                                maxPrice: null,
                                budgetLabel: '',
                                budgetSelected: '' 
                                }))
                            }
                        >
                        <svg width="12" height="12" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="m8.485 7 4.487-4.487.926-.925a.35.35 0 0 0 0-.495l-.99-.99a.35.35 0 0 0-.495 0L7 5.515 1.588.102a.35.35 0 0 0-.495 0l-.99.99a.35.35 0 0 0 0 .495L5.514 7 .102 12.413a.35.35 0 0 0 0 .495l.99.99a.35.35 0 0 0 .495 0L7 8.485l4.487 4.487.926.926a.35.35 0 0 0 .495 0l.99-.99a.35.35 0 0 0 0-.495L8.485 7Z"/>
                        </svg>
                        </span>
                    </span>
                    )}

                    {filterBy.sellerRateFilter && (
                    <span className="filter-tag">
                        {rateLabels[filterBy.sellerRateFilter] || filterBy.sellerRateFilter}
                        <span
                        className="remove-icon"
                        onClick={() =>
                            setFilterBy(prev => ({ ...prev, sellerRateFilter: null }))
                        }
                        >
                        <svg width="12" height="12" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="m8.485 7 4.487-4.487.926-.925a.35.35 0 0 0 0-.495l-.99-.99a.35.35 0 0 0-.495 0L7 5.515 1.588.102a.35.35 0 0 0-.495 0l-.99.99a.35.35 0 0 0 0 .495L5.514 7 .102 12.413a.35.35 0 0 0 0 .495l.99.99a.35.35 0 0 0 .495 0L7 8.485l4.487 4.487.926.926a.35.35 0 0 0 .495 0l.99-.99a.35.35 0 0 0 0-.495L8.485 7Z"/>
                        </svg>
                        </span>
                    </span>
                    )}

                    {filterBy.deliveryTime && (
                        <span className="filter-tag">
                            {filterBy.deliveryTimeLabel || `Delivery: ${filterBy.deliveryTime}`}
                            <span
                                className="remove-icon"
                                onClick={() =>
                                    setFilterBy(prev => ({
                                    ...prev,
                                    deliveryTime: null,
                                    deliveryTimeLabel: null
                                    }))
                                }
                            >
                            <svg width="12" height="12" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <path d="m8.485 7 4.487-4.487.926-.925a.35.35 0 0 0 0-.495l-.99-.99a.35.35 0 0 0-.495 0L7 5.515 1.588.102a.35.35 0 0 0-.495 0l-.99.99a.35.35 0 0 0 0 .495L5.514 7 .102 12.413a.35.35 0 0 0 0 .495l.99.99a.35.35 0 0 0 .495 0L7 8.485l4.487 4.487.926.926a.35.35 0 0 0 .495 0l.99-.99a.35.35 0 0 0 0-.495L8.485 7Z"/>
                            </svg>
                            </span>
                        </span>
                    )}
                    </div>
                </div>
                )}

            <div className="top-of-gigs">
                {/* <div className="number-of-results">{gigs.length} services available</div> */}
                    <div className="number-of-results">{sortedGigs.length} services available</div>
                <div className="sort-container"  ref={sortRef}>
                    <span className="sort-title">Sort by:</span>

                    <div className="sort-dropdown">
                    <div
                        className="sort-toggle"
                        onClick={() =>
                            setOpenFilter(prev => (prev === 'sort' ? null : 'sort'))
                        }
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

                    {openFilter === 'sort' && (
                        <ul className="sort-options">
                            {Object.entries(displayMap).map(([value, label]) => {
                            const isSelected = filterBy.sortBy === value;
                            return (
                                <li
                                key={value}
                                className={isSelected ? 'selected' : ''}
                                onClick={() => {
                                    setFilterBy(prev => ({ ...prev, sortBy: value }))
                                    setOpenFilter(null)
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
                            )
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



