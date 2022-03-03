import React from 'react';

function Nav (props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <nav className="nav-bar">
            <ul className="flex-row mobile-view">
                <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("about")}>About Me</span>
                </li>
                <li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
                </li>
                <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("contact")}>Contact Me</span>
                </li>
                <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("resume")}>Resume</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;

// import React from 'react';

// function Nav (props) {
//     const links =["About", "Resume", "Portfolio", "Contact"];

//     return (
//         <div className='links'>
//             <ul className='nav nav-links'>
//                 {links.map((link) => (
//                     <li
//                         className={props.currentPage === link ? "nav-item is-active" : "nav-item"
//                     }
//                     key={link}
//                     >
//                     <a href={"#" + link.toLowerCase()}
//                     // link is clicked on, current page is set through the handlePageChange props.
//                     onClick={() => props.handlePageChange(link)}
//                     className={
//                         props.currentPage === link ? "nav-link active" : "nav-link"
//                     }
//                     >
//                         {link}
//                     </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Nav;