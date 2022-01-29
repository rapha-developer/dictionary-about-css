function MetaItem(props) {
    return (
        <li className="meta__item" key={props.id}>
            <a href={props.url} className="meta__link" title={props.title}>
                <i className={props.icon}></i>
            </a>
        </li>
    )
}
export default MetaItem