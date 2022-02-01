import { useState } from 'react';
import logo from '../images/raphael_logo_transparent.svg';

import Nav from './Nav'

function Sidebar() {

    const [toggleBar, setToggleBar] = useState(true)
    
    function toggleSidebar() {
        setToggleBar(prevToggle => !prevToggle)
    }
    const spaceBar = (toggleBar) ? "space" : "space hidden";

    return ( 
    <aside>
        <div className="sidebar">
            <div className="sidebar__imgWrapper">
                <img src={logo} alt="Raphael Logo" />
            </div>
            <Nav show={toggleBar}/>
            <div className={spaceBar} id="space"></div>
            <div className="bar" id="hamburger__bar" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </aside>
    )
}

export default Sidebar