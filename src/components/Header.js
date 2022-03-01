import React, { useState} from 'react';

import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header () {
    const [currentPage, handlePageChange] = useState("About");

    //use method that can switch statements to render approprite current page
    const renderPage = () => {
        switch(currentPage) {
            case "About":
                return <About />;
            case "Resume":
                return <Resume />;
            case "Portfolio" :
                return <Portfolio />;
            case "Contact":
                return <Contact />

            default: return <About />;
        }
    };

    //return statement that flows info into their respective containers
    return (
        <div>
            <nav className='nav'>
                
            </nav>
        </div>
    )
}

export default Header;