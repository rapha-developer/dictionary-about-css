import Snippet from '../components/Snippet';
import codeData from '../api/gridData';

function Grids() {

    const snippet__list = codeData.map((codeItem) => {
        return (
            <Snippet 
                key={codeItem.id}
                id={codeItem.id}
                header={codeItem.header}
                text={codeItem.text}
                codeFirst={codeItem.codeFirst}
                languageFirst={codeItem.languageFirst}
                codeSecond={codeItem.codeSecond}
                languageSecond={codeItem.languageSecond}
                codeSnippet={codeItem.codeSecond}
            />
        )
    });

    return (
        <main className="main bg--grids pp__10">
            <h2 className="articles__header">Grids Snippets</h2>
            {snippet__list}
        </main>
    );
}

export default Grids