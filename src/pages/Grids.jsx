import Code from '../components/Code';
import codeData from '../api/codeData';
import Snippet from '../components/Snippet';

function Grids() {
    // const [showHTML, setShowHTML] = useState(false)

    // function toggleTextButton() {
    //     return (showHTML) ? 'CSS': 'HTML';
    // }
    // function toggleCode() {
    //     setShowHTML((prevCode) => !prevCode);
    // }

    const htmlCode = ( 
        <div className="container">
            <div className="item">a1</div>
            <div className="item">a2</div>
            <div className="item">a3</div>
        </div>
    );
    // const cssCode = 
    // `
    // .container {
    //     margin: 0px auto;
    //     color: red;
    // }
    // `;
    const codificationHtml = 
    `
    <div class="container">
        <div class="item">a1</div>
        <div class="item">a2</div>
        <div class="item">a3</div>
    </div>
    `;
    
    // const code = showHTML ? codificationHtml : cssCode;
    // useEffect(() => {
    //     Prism.plugins.NormalizeWhitespace;
    //     Prism.highlightAll()
    // }, [code])
    const code__list = codeData.map((codeItem) => {
        return <Code
                key={codeItem.id}
                codeFirst={codeItem.codeFirst}
                languageFirst={codeItem.languageFirst}
                codeSecond={codeItem.codeSecond}
                languageSecond={codeItem.languageSecond}
                />
    });
    const snippet__list = codeData.map((snippetItem) => {
        return <Snippet
                key={snippetItem.id}
                snippet={snippetItem.codeSecond}
                />
    })
    return (
        <main className="main bg--gradient pp__10">
            <h2>Em desenvolvimento...</h2>
            <br />
            <div className="codification">
                <div className="codification--highlights">
                    {code__list}
                </div>
                <div className="codification--results ">
                    {snippet__list}
                </div>
            </div>
        </main>
    );
}

export default Grids