function NavItem(props) {
    return (
        <li className="nav__item" key={props.id} >
            <a href="#" className="nav__link">{props.name}</a>
        </li>
    )
}
export default NavItem