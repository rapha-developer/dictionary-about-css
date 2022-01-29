import Opener from "./Opener"

import Feed from "./Feed"
import Article from "./Article"
import articlesData from "../api/articlesData"


function Main() {

    const opener = {
        image: "https://avatars.githubusercontent.com/u/91702283?v=4",
        title: "Hello! I Am",
        title__accent: "Rapha developer",
        description: "Este é um blog para registrar os snippets CSS durante o meu aprendizado, desde animações, propriedades :before ou :after, centralizar verticalmente ou horizontalmente conteúdos (contents). Cada artigo contém um gif para mostrar o resultado e o link para o code (in github).",
        description__accent: "Welcome, my friend"
    }
    
    const articles__list = articlesData.map((article) => 
        <Article 
            key={article.id}
            image={article.image} 
            tags={article.tags} 
            title={article.title} 
            description={article.description}
        />
    )

    return (
        <main className="main">
            <Opener 
                image={opener.image} 
                title={opener.title} 
                title__accent={opener.title__accent} 
                description={opener.description} 
                description__accent={opener.description__accent}  
            />
            <Feed 
                header="Recent Articles"
                articles={articles__list}
            />
        </main>
    )
}

export default Main