import React from 'react';

import Nav from "../Nav";
// import About from "./About";
// import Contact from "./Contact";
// import Portfolio from "./Portfolio";
// import Resume from "./Resume";

function Header (props) {
    const { currentTab, setCurrentTab} = props;

    //return statement that flows info into their respective containers
    return (
        <header>
            <div>
                <h1 className="name">Alexis' React Portfoloio</h1>
            </div>

            <div>
                <Nav
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                ></Nav>
            </div>
        </header>
    );
}

export default Header;

// import React, { useState} from 'react';

// import Nav from "./Nav";
// import About from "./About";
// import Contact from "./Contact";
// import Portfolio from "./Portfolio";
// import Resume from "./Resume";

// function Header () {
//     const [currentPage, handlePageChange] = useState("About");

//     //use method that can switch statements to render approprite current page
//     const renderPage = () => {
//         switch(currentPage) {
//             case "About":
//                 return <About />;
//             case "Resume":
//                 return <Resume />;
//             case "Portfolio" :
//                 return <Portfolio />;
//             case "Contact":
//                 return <Contact />

//             default: return <About />;
//         }
//     };

//     //return statement that flows info into their respective containers
//     return (
//         <div>
//             <nav className='nav'>
//                 <div className='nav-bar'>
//                     <a className='nav-item'
//                         target="_blank"
//                         href='https://github.com/alexisn84'>

//                         <span className='name is-large'>Alexis El Amrani</span>
//                     </a>
//                 </div>
//             </nav>

//             {/* pass the state and setter as props to Navigation */}
            
//             <Nav 
//                 currentPage={currentPage}
//                 handlePageChange={handlePageChange}
//             />
//             {/* call the function to pass to the currentPage */}
//             <main>
//                 <div>{renderPage(currentPage)}</div>
//             </main>
//         </div>
//     );
// }

// export default Header;