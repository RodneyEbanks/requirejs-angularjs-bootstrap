({
    appDir: '../src',
    baseUrl: './',
    dir: '../dist',
    keepBuildDir: false,
    fileExclusionRegExp: /^\.|^(node_modules|gruntfile|gulpfile|example|src|build|gulp|api|LICENSE|package\.json)|\.(md|gzip|map)|\.min\.(js)/i,
    findNestedDependencies: true,
    useStrict: true,
    removeCombined: true,
    optimize: 'uglify',
    uglify: {
        quote_style: 2,
        toplevel: true,
        ascii_only: true,
        beautify: false,
        max_line_length: 1000,
        no_mangle: true
    },
    inlineText: false,
    preserveLicenseComments: true,
    wrap: false,
    mainConfigFile: 'main.js',
    modules: [{
        name: 'bootstrap',
        exclude: ['angular', 'config!paths']
    }]
})
