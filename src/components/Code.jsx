import { useEffect, useState } from 'react'

import '../assets/prism.css'
import '../assets/prism'

function Code({ codeFirst, languageFirst, codeSecond, languageSecond}){
    const [showCodeFirst, setShowCodeFirst] = useState(false);

    const code = showCodeFirst ? codeSecond : codeFirst;
    const language = showCodeFirst ? languageSecond : languageFirst;
    const btn__language = showCodeFirst ? languageFirst : languageSecond;

    useEffect(() => {
        Prism.plugins.NormalizeWhitespace;
        Prism.highlightAll()
    }, [code]);

    function toggleCode() {
        setShowCodeFirst(prevCode => !prevCode)
    }
    return (
        <div className="codeWrapper">
            <pre className="code__attributes">
                <button className='btn__show' onClick={toggleCode}>Show {btn__language}</button>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
}

export default Code

// function Code() {
//     return (
//         <pre className='zero-margin'>
//             <button class="add-show">Show CSS</button>
//             <code class="language-css">
//                 {html}
//             </code>
//         </pre>
//     )
// }

// export default Code