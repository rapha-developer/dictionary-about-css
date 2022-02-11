import flexData from "../api/flexData"
import Snippet from "../components/Snippet"

function Flex() {
    const snippet__list = flexData.map((flexItem) => {
        return <Snippet
                key={flexItem.id}
                header={flexItem.header}
                text={flexItem.text}
                codeFirst={flexItem.codeFirst}
                languageFirst={flexItem.languageFirst}
                codeSecond={flexItem.codeSecond}
                languageSecond={flexItem.languageSecond}
                codeSnippet={flexItem.codeSecond}
            />
    })
    return (
        <main className="main bg--grids pp__10">
            <h2 className="articles__header">Flex Snippets</h2>
            {snippet__list}
        </main>
    );
}
export default Flex