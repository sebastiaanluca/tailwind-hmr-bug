module.exports = {
    mode: 'jit',
    purge: [
        './resources/views/welcome.blade.php',
        './resources/js/MyComponent.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
