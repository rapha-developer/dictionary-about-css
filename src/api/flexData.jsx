export default [
    {
        id: 1,
        header: 'Flex with flex-direction column',
        text: "Flex direction define como flex items são posicionados dentro do flex container, definindo o eixo principal e a direção (normal or reversed).",
        codeFirst: `
                    .snippet_1 {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
        `,
        languageFirst: 'css',
        codeSecond: `
                    <div class="normalize flex__snippet_1">
                        <div class="box">box1</div>
                        <div class="box">box2</div>
                        <div class="box">box3</div>
                    </div>
        `,
        languageSecond: 'html',
    },
    {
        id: 2,
        header: 'Flex with justify-content and align-items',
        text: "A propriedade justify-content define como o browser vai distribuir os espaços entre os items (seja pelo entre ou ao redor) deles.", 
        codeFirst: `
                    .snippet_2 {
                        display: flex;
                        justify-content: center;
                        align-items: flex-end;
                    }
        `,
        languageFirst: 'css',
        codeSecond: `
                    <div class="normalize flex__snippet_2">
                        <div class="box">box1</div>
                        <div class="box">box2</div>
                        <div class="box">box3</div>
                    </div>
        `,
        languageSecond: 'html',
    }
]