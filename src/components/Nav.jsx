import sidebarData from "../api/sidebarData"

import Meta from './Meta'
import NavItem from "./NavItem"

function Nav(props) {
    const nav__items = sidebarData.map((item) => 
        <NavItem 
            key={item.id}
            name={item.name}
        />
    )
    const navClass = (props.show) ? "nav" : "nav show"
    
    return (
        <nav className={navClass} id="nav__menu">
            <ul className="nav__list">
                {nav__items}
            </ul>
            <Meta />
        </nav>
    )
}
export default Nav