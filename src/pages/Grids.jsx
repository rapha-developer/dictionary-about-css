import Snippet from '../components/Snippet';
import codeData from '../api/codeData';

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

    const snippet__list = codeData.map((codeItem) => {
        return (
            <Snippet 
                key={codeItem.id}
                id={codeItem.id}
                header={codeItem.header}
                tags={codeItem.tags}
                codeFirst={codeItem.codeFirst}
                languageFirst={codeItem.languageFirst}
                codeSecond={codeItem.codeSecond}
                languageSecond={codeItem.languageSecond}
                codeSnippet={codeItem.codeSecond}
            />
        )
    });

    return (
        <main className="main bg--gradient pp__10">
            <h2 className="articles__header">Grids Snippets</h2>
            {snippet__list}
        </main>
    );
}

export default Grids