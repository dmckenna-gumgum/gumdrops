module.exports = {
    output: './gumdrops.asketch.json',
    url: 'http://localhost:6006/iframe.html',
    concurrency: 1,
    querySelector: '#target',
    fixPseudo: true,
    removePreviewMargin: false,
    verbose: true,
    viewports: {
        standard: {
            width: 1920,
            height: 1200,
            symbolPrefix: 'Desktop/'
        }
    }
    // },
    // stories: [
    //     {
    //         kind: 'Atoms',
    //         stories: [
    //             {
    //                 name: 'Button'
    //             }
    //         ]
    //     }
    // ]
};
