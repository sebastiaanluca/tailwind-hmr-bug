const mix = require('laravel-mix')

mix.browserSync({
    proxy: 'tailwindhmrbug.test',
    open: false,
    files: [
        './resources/views/**/*',
        './resources/lang/**/*',
    ],
})

mix.postCss('resources/css/app.css', 'public/css', [
    require('tailwindcss'),
])
