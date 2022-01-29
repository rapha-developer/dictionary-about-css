function Article(props) {
    return (
        <article className="article">
            <div className="zoom zoom__effect--100 zoom__effect--200">
                <a href="#" className="article__image">
                    <img className="" src={props.image}  alt={props.title} />
                </a>
            </div>
            <div className="article__category">
                <a href="#" rel="tag">{props.tags}</a>
            </div>
            <h3 className="article__title">
                <a href="#">{props.title}</a>
            </h3>
            <p className="article__description">{props.description}...</p>
        </article>
    )
}

export default Article