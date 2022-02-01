import componentsData from "../api/componentsData";
import Article from "../components/Article";
import Feed from "../components/Feed";

function Components() {
    
    const components__list = componentsData.map((comp) => 
        <Article 
            key={comp.id}
            image={comp.image}
            tags={comp.tags}
            codeUrl={comp.codeUrl}
            title={comp.title}
            description={comp.description}
        />
    )
    return (
        <main className="main">
            <Feed 
                header="Components List"
                articles={components__list}
            />
        </main>
    )
}

export default Components;