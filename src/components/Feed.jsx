function Feed(props) {
    return (
        <section className="articles">
            <div className="sectionWrapper">
                <h2 className="articles__header">{props.header}</h2>
                <div className="articles__listWrapper">
                    {props.articles}
                </div>
            </div>
        </section>
    )
}

export default Feed