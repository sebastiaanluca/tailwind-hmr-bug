const mix = require('laravel-mix')

mix.disableNotifications()
//mix.webpackConfig(require('./webpack.config'))
//mix.sourceMaps(false)
mix.vue()
mix.extract()

//mix.options({
//    terser: {
//        // Disable license file
//        extractComments: false,
//    },
//    postCss: [
//        require('tailwindcss'),
//    ],
//})

mix.options({
    hmrOptions: {
        host: '0.0.0.0',
        port: 8080,
    },
    postCss: [
        require('tailwindcss'),
    ],
})

mix.browserSync({
    proxy: 'tailwindhmrbug.test',
    open: false,
    files: [
        './resources/views/**/*',
        './resources/lang/**/*',
    ],
})

mix.js('resources/js/site.js', 'public/js') // <<< HMR breaks with this enabled
mix.js('resources/js/app.js', 'public/js')
mix.postCss('resources/css/global.css', 'public/css')
mix.postCss('resources/css/app.css', 'public/css')
