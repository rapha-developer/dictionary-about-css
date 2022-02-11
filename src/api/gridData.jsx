export default [
    {
        id: 1,
        header: 'Grid with place-items center',
        text: "Place items é uma curta propriedade que permite alinhar items ao longo do bloco (Block) and em linha (linha) de uma só vez",
        codeFirst: `
                    .snippet_1 {
                        display: grid;
                        place-items: center;
                        grid-gap: 20px;
                    }
        `,
        languageFirst: 'css',
        codeSecond: `
                    <div class="normalize grid__snippet_1">
                        <div class="box">box1</div>
                        <div class="box">box2</div>
                        <div class="box">box3</div>
                    </div>
        `,
        languageSecond: 'html',
    },
    {
        id: 2,
        header: 'Grid with justify and align center',
        text: "As propriedades justify-items and align-content se referem ao alinhamento no eixo x e y, na ordem apresentada anteriormente",
        codeFirst: `
                    .snippet_2 {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        justify-items: center;
                        align-content: center;
                        grid-gap: 20px;
                    }
        `,
        languageFirst: 'css',
        codeSecond: `
                    <div class="normalize grid__snippet_2">
                        <div class="box">box1</div>
                        <div class="box">box2</div>
                        <div class="box">box3</div>
                    </div>
        `,
        languageSecond: 'html',
    }
]