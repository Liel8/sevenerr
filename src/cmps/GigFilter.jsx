import { useState, useEffect } from 'react'

export function GigFilter({ filterBy, setFilterBy }) {
    const [filterToEdit, setFilterToEdit] = useState(structuredClone(filterBy))

    useEffect(() => {
        setFilterBy(filterToEdit)
    }, [filterToEdit])

    function handleChange(ev) {
        const type = ev.target.type
        const field = ev.target.name
        let value

        switch (type) {
            case 'text':
            case 'radio':
                value = field === 'sortDir' ? +ev.target.value : ev.target.value
                if (!filterToEdit.sortDir) filterToEdit.sortDir = 1
                break
            case 'number':
                value = +ev.target.value || ''
                break
        }
        setFilterToEdit({ ...filterToEdit, [field]: value })
    }

    function clearFilter() {
        setFilterToEdit({ ...filterToEdit, txt: '', minPrice: '', maxPrice: '' })
    }

    function clearSort() {
        setFilterToEdit({ ...filterToEdit, sortField: '', sortDir: '' })
    }

    return (
        <section className="gig-filter">
            <h3>Filter:</h3>
            <input
                type="text"
                name="txt"
                value={filterToEdit.txt}
                placeholder="Search by title, tags or description"
                onChange={handleChange}
                required
            />
            <input
                type="number"
                min="0"
                name="minPrice"
                value={filterToEdit.minPrice}
                placeholder="Min. price"
                onChange={handleChange}
            />
            <input
                type="number"
                min="0"
                name="maxPrice"
                value={filterToEdit.maxPrice}
                placeholder="Max. price"
                onChange={handleChange}
            />
            <button className="btn-clear" onClick={clearFilter}>
                Clear Filters
            </button>
            <h3>Sort:</h3>
            <div className="sort-field">
                <label>
                    <span>Price</span>
                    <input
                        type="radio"
                        name="sortField"
                        value="price"
                        checked={filterToEdit.sortField === 'price'}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Title</span>
                    <input
                        type="radio"
                        name="sortField"
                        value="title"
                        checked={filterToEdit.sortField === 'title'}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Owner</span>
                    <input
                        type="radio"
                        name="sortField"
                        value="owner"
                        checked={filterToEdit.sortField === 'owner'}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className="sort-dir">
                <label>
                    <span>Asc</span>
                    <input
                        type="radio"
                        name="sortDir"
                        value="1"
                        checked={filterToEdit.sortDir === 1}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Desc</span>
                    <input
                        type="radio"
                        name="sortDir"
                        value="-1"
                        onChange={handleChange}
                        checked={filterToEdit.sortDir === -1}
                    />
                </label>
            </div>
            <button className="btn-clear" onClick={clearSort}>
                Clear Sort
            </button>
        </section>
    )
}




// import { useState, useEffect } from 'react'

// export function GigFilter({ filterBy, setFilterBy }) {
//     const [ filterToEdit, setFilterToEdit ] = useState(structuredClone(filterBy))

//     useEffect(() => {
//         setFilterBy(filterToEdit)
//     }, [filterToEdit])

//     function handleChange(ev) {
//         const type = ev.target.type
//         const field = ev.target.name
//         let value

//         switch (type) {
//             case 'text':
//             case 'radio':
//                 value = field === 'sortDir' ? +ev.target.value : ev.target.value
//                 if(!filterToEdit.sortDir) filterToEdit.sortDir = 1
//                 break
//             case 'number':
//                 value = +ev.target.value || ''
//                 break
//         }
//         setFilterToEdit({ ...filterToEdit, [field]: value })
//     }

//     function clearFilter() {
//         setFilterToEdit({ ...filterToEdit, txt: '', minSpeed: '', maxPrice: '' })
//     }
    
//     function clearSort() {
//         setFilterToEdit({ ...filterToEdit, sortField: '', sortDir: '' })
//     }

//     return <section className="gig-filter">
//             <h3>Filter:</h3>
//             <input
//                 type="text"
//                 name="txt"
//                 value={filterToEdit.txt}
//                 placeholder="Free text"
//                 onChange={handleChange}
//                 required
//             />
//             <input
//                 type="number"
//                 min="0"
//                 name="minSpeed"
//                 value={filterToEdit.minSpeed}
//                 placeholder="min. speed"
//                 onChange={handleChange}
//                 required
//             />
//             <button 
//                 className="btn-clear" 
//                 onClick={clearFilter}>Clear</button>
//             <h3>Sort:</h3>
//             <div className="sort-field">
//                 <label>
//                     <span>Speed</span>
//                     <input
//                         type="radio"
//                         name="sortField"
//                         value="speed"
//                         checked={filterToEdit.sortField === 'speed'}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     <span>Vendor</span>
//                     <input
//                         type="radio"
//                         name="sortField"
//                         value="vendor"
//                         checked={filterToEdit.sortField === 'vendor'}            
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     <span>Owner</span>
//                     <input
//                         type="radio"
//                         name="sortField"
//                         value="owner"
//                         checked={filterToEdit.sortField === 'owner'}                        
//                         onChange={handleChange}
//                     />
//                 </label>
//             </div>
//             <div className="sort-dir">
//                 <label>
//                     <span>Asce</span>
//                     <input
//                         type="radio"
//                         name="sortDir"
//                         value="1"
//                         checked={filterToEdit.sortDir === 1}                        
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     <span>Desc</span>
//                     <input
//                         type="radio"
//                         name="sortDir"
//                         value="-1"
//                         onChange={handleChange}
//                         checked={filterToEdit.sortDir === -1}                        
//                     />
//                 </label>
//             </div>
//             <button 
//                 className="btn-clear" 
//                 onClick={clearSort}>Clear</button>
//     </section>
// }