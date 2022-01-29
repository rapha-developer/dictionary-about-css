function Opener(props) {
    return (
        <section className="opener">
            <div className="sectionWrapper openerWrapper">
                <img src={props.image} alt="Avatar Photo"  className="opener__img" />
                <h1 className="opener__title">{props.title}<br />
                <span className="opener__title--accent">{props.title__accent}</span></h1>
                <p className="opener__description">{props.description}<strong>{props.description__accent}</strong>.</p>
                <a href="#" className="opener__more">
                    <span className="">More About Me </span><i className="fas fa-long-arrow-alt-right opener__arrow"></i>
                </a>
            </div>
        </section>
    )
}
export default Opener