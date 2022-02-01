import Feed from "../components/Feed"
import effectsData from "../api/effectsData"
import Article from "../components/Article"

function Effects() {
    
    const effects_list = effectsData.map((effect) => 
        <Article 
            key={effect.id}
            image={effect.image} 
            tags={effect.tags} 
            codeUrl={effect.codeUrl}
            title={effect.title} 
            description={effect.description}
        />
    );
    
    return (
        <main className="main">
            <Feed 
                header="Effects List"
                articles={effects_list}
            />
        </main>
    )
}

export default Effects