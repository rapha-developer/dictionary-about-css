import metaData from "../api/metaData"

import MetaItem from "./MetaItem"
function Meta() {
    const meta__items = metaData.map(item => 
        <MetaItem 
            key={item.id} 
            url={item.url} 
            title={item.title} 
            icon={item.icon}
        />
    )

    return (
        <ul className="meta">
            {meta__items}
        </ul>
    )
}

export default Meta