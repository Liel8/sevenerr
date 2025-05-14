

export function UserProfile() {

    return (
        <section className="details-container">
            <section className="user-details ">
                <div className="user-card">
                    <div className="user-profile-info">
                        <div className="flex justify-center">
                            <div className="user-profile-img">
                                <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297748/mtzz6bvdfzf3xwirw8vo.jpg" alt="user img" />
                            </div>
                        </div>
                        <div className="user-profile-label">
                            <div className="username-line flex column align-center">
                                <div className="username-info">Avici Rabi</div>
                                <div className="secondary-name">@avici</div>
                            </div>
                        </div>
                        <div className="user-stats-desc">
                            <ul className="user-stats with-border-top">
                                <li className="location info-card-style flex">
                                    <span>
                                    <span className="fa-regular fa-clock icon" aria-hidden="true"></span>
                                    {/* <svg width="32" height="32">
                                        <use href="/public/icons/location-sign-icon.svg" />
                                    </svg> */}
                                        From
                                    </span>
                                    <b>Israel</b>
                                </li>
                                <li className="member-since info-card-style flex">
                                    <span>
                                        <span className="fa-solid fa-user icon" aria-hidden="true"></span>
                                        Member since
                                    </span>
                                    <b>Oct 2023</b>
                                </li>
                                <li className="member-res-time info-card-style flex">
                                    <span>
                                        <span className="fa-regular fa-clock icon" aria-hidden="true"></span>
                                        Avg. Response Time
                                    </span>
                                    <b>1 hour</b>
                                </li>
                                <li className="member-res-time info-card-style flex">
                                    <span>
                                        <span className="fa-solid fa-paper-plane icon" aria-hidden="true"></span>
                                        Last Delivery
                                    </span>
                                    <b>4 hours</b>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="desc-card">
                    <div className="user-profile-desc">
                        <div className="user-stats">
                            <div className="user-data">
                                <div className="header flex">
                                    <h3 title="Tell us more about yourself. Buyers are also interested in learning about you as a person.">Description</h3>
                                </div>
                                <p>Fullstack developer with awesome exprience🚀</p>
                            </div>
                            <div className="user-lang with-border-top">
                                <div className="header flex">
                                    <h3 title="You can make up to four selections.">Languages</h3>
                                </div>
                                <ul>
                                    <li>
                                        <span className="title">English</span>
                                        - 
                                        <span className="sub-title">Fluent</span>
                                    </li>
                                    <li>
                                        <span className="title">Hebrew</span>
                                        - 
                                        <span className="sub-title">Fluent</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="user-linked with-border-top">
                                <div className="header flex">
                                    <h3>Linked Accounts</h3>
                                </div>
                                <ul>
                                    <li>
                                        <span className="title">
                                            <span className="fa-brands fa-facebook logo" aria-hidden="true"></span>
                                            Facebook
                                        </span>
                                    </li>
                                    <li>
                                        <span className="title">
                                            <span className="fa-brands fa-google logo" aria-hidden="true"></span>
                                            Google
                                        </span>
                                    </li>
                                    <li>
                                        <span className="title">
                                            <span className="fa-brands fa-twitter logo" aria-hidden="true"></span>
                                            Twitter
                                        </span>
                                    </li>
                                    <li>
                                        <span className="title">
                                            <span className="fa-brands fa-dribbble logo" aria-hidden="true"></span>
                                            Dribbble
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="user-skills with-border-top">
                                <div className="header flex">
                                    <h3 title="Let your buyers know your skills. Skills gained through your previous jobs, hobbies or even everyday life.">Skills</h3>
                                </div>
                                <ul>
                                    <li>
                                        <span className="pill">Website design</span>
                                    </li>
                                    <li>
                                        <span className="pill">Shopify marketing</span>
                                    </li>
                                    <li>
                                        <span className="pill">Python</span>
                                    </li>
                                    <li>
                                        <span className="pill">JavaScript</span>
                                    </li>
                                    <li>
                                        <span className="pill">Sales</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="user-education with-border-top">
                                <div className="header flex">
                                    <h3 title="Describe your educational background. It will help buyers get to know you!">Education</h3>
                                </div>
                                <ul>
                                    <li>
                                        <span className="title">M.B.A. - Financial Management</span>
                                    </li>
                                    <li>
                                        <span className="empty">Universität Berlin, Germany, Graduated 2017</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="orders-column">
                <div className="manage-orders">
                    <div className="order-header flex">
                        <h1>Manage Orders</h1>
                        <button className="dash-btn">Dashboard Overview</button>
                    </div>
                </div>

                <section className="">
                    <table className="order-list ">
                        <thead>
                            <tr>
                                <td>Buyer</td>
                                <td>Gig</td>
                                <td>Due on</td>
                                <td>Total</td>
                                <td className="order-status">Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699302177/p9p0m26jbyb8q6jd7nud.webp" alt="Buyer img" />
                                        Ciro D
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will design a responsive we...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Nov 10, 2023</td>
                                <td>$69</td>
                                <td className="status ">
                                    <span className="fulfilled-label label "> Fulfilled </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696589336/MV5BZDJhYzdkMTUtMTg2MS00ZTM5LWI1OGUtYTY5MzY4NDM3NThjXkEyXkFqcGdeQXVyMjQwMDg0Ng_._V1__okvske.jpg" alt="Buyer img" />
                                        Liri C
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will create a professional ...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Nov 9, 2023</td>
                                <td>$22</td>
                                <td className="status ">
                                    <span className="fulfilled-label label "> Fulfilled </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699444623/lyiwbaiibkqz0vpm1ddj.webp" alt="Buyer img" />
                                        Jenner P
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will create pixel art anima...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Nov 12, 2023</td>
                                <td>$93</td>
                                <td className="status ">
                                    <span className="fulfilled-label label "> Fulfilled </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297771/wwalxfxyg1msfp25zack.jpg" alt="Buyer img" />
                                        Raz Amsalem
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will create a professional ...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Nov 11, 2023</td>
                                <td>$40</td>
                                <td className="status ">
                                    <span className="fulfilled-label label "> Fulfilled </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297771/wwalxfxyg1msfp25zack.jpg" alt="Buyer img" />
                                        Raz Amsalem
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will create a professional ...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Nov 16, 2023</td>
                                <td>$22</td>
                                <td className="status ">
                                    <span className="fulfilled-label label "> Fulfilled </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
                                        Tzvia I 
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will create a professional ...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Nov 16, 2023</td>
                                <td>$22</td>
                                <td className="status ">
                                    <span className="fulfilled-label label "> Fulfilled </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
                                        Tzvia I 
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will design a responsive we...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Mar 23, 2024</td>
                                <td>$69</td>
                                <td className="status ">
                                    <span className="fulfilled-label label "> Fulfilled </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
                                        Tzvia I 
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will design a responsive we...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Mar 27, 2024</td>
                                <td>$104</td>
                                <td className="status ">
                                    <span className="fulfilled-label label "> Fulfilled </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
                                        Tzvia I 
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will design a responsive we...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Apr 5, 2024</td>
                                <td>$69</td>
                                <td className="status ">
                                    <span className="fulfilled-label label "> Fulfilled </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
                                        Tzvia I 
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will create pixel art anima...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Nov 11, 2024</td>
                                <td>$104</td>
                                <td className="status ">
                                    <span className="fulfilled-label label "> Fulfilled </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
                                        Tzvia I 
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will create pixel art anima...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Jan 19, 2025</td>
                                <td>$104</td>
                                <td className="status ">
                                    <span className="rejected-label label "> Rejected </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
                                        Tzvia I 
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will design a responsive we...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Feb 3, 2025</td>
                                <td>$75</td>
                                <td className="status ">
                                    <span className="rejected-label label "> Rejected </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
                                        Tzvia I 
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will design a responsive we...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Feb 3, 2025</td>
                                <td>$75</td>
                                <td className="status ">
                                    <span className="fulfilled-label label "> Fulfilled </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
                                        Tzvia I 
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will design a responsive we...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Feb 8, 2025</td>
                                <td>$75</td>
                                <td className="status ">
                                    <span className="fulfilled-label label "> Fulfilled </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
                                        Tzvia I 
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will create a 2D frame by f...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Feb 3, 2025</td>
                                <td>$34</td>
                                <td className="status ">
                                    <span className="fulfilled-label label "> Fulfilled </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-with-img">
                                        <img src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1699297760/p3gum8eu8nfdxwptc9bt.jpg" alt="Buyer img" />
                                        Tzvia I 
                                    </div>
                                </td>
                                <td className="order-title">
                                    <div className="gig-img flex">
                                        <div className="long-text">
                                            <p className="book-desc">I will design a responsive we...  </p>
                                        </div>
                                    </div>
                                </td>
                                <td>Mar 29, 2025</td>
                                <td>$75</td>
                                <td className="status ">
                                    <span className="fulfilled-label label "> Fulfilled </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
        </section>
    )
}