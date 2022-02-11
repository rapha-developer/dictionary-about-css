import Code from '../components/Code';


function Snippet(props) {
    return (
        <div>
            <div className="snippet">
            <h4 className="snippet__header">{props.header}</h4>
            <p className="snippet__text">{props.text}</p>
            <div className="snippet__codeblocks">
                <div className="snippet__preview" 
                    dangerouslySetInnerHTML={{ __html: props.codeSnippet }} 
                />
                <Code
                    key={props.id}
                    codeFirst={props.codeFirst}
                    languageFirst={props.languageFirst}
                    codeSecond={props.codeSecond}
                    languageSecond={props.languageSecond}
                />
            </div>
        </div>
        <hr className='snippet__line' />
        </div> 
        
    );
}
export default Snippet