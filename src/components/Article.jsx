function Article(props) {

    const imageUrl = (props.image).includes('src') ? props.image : `src/images/${props.image}.svg`

    return (
        <article className="article">
            <div className="zoom zoom__effect--100 zoom__effect--200">
                <a href={props.codeUrl} target="_blank" className="article__image">
                    <img className="" src={imageUrl}  alt={props.title} />
                </a>
            </div>
            <div className="article__category">
                <a href="#" rel="tag">{props.tags}</a>
            </div>
            <h3 className="article__title">
                <a href={props.codeUrl} target="_blank" >{props.title}</a>
            </h3>
            <p className="article__description">{props.description}...</p>
        </article>
    )
}

export default Article