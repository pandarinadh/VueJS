module.exports ={
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceTupe: 'module'
    },
    rules: {
        "no-unused-vars": "off"
    },
    extends: 'standard',

    plugins: [
        'html'
    ]
}