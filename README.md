# Tailwind HMR bug example repository

## Description

This repository attempts to reproduce a bug when using Laravel Mix / Webpack hot reload where **using new, previously unused Tailwind classes** would not be rendered unless you manually refresh the page (or have used the classes before).

The culprit seems to be compiling 2 JS files, but can vary depending on project.

```js
mix.js('resources/js/site.js', 'public/js') // <<< HMR breaks with this enabled
mix.js('resources/js/app.js', 'public/js')
```

## Steps to follow

After cloning the repository and opening the local directory in your terminal:

1. Run `npm run dev`
2. Run `npm run hot`
3. Navigate to http://localhost:3000 in your browser
4. Open `resources/js/MyComponent.vue`
5. Add some unused classes to `<div class="flex">` like `bg-indigo-500` and `text-yellow-300`
6. Notice the classes are used in the HTML, but not generated in the CSS

## How to fix

1. Open `webpack.mix.js`
2. Remove `mix.js('resources/js/site.js', 'public/js')`
3. Remove your classes in `MyComponent.vue`
4. Try [Steps to follow](#steps-to-follow) again
5. Notice the component is updated properly and the necessary CSS is generated and injected. Now Webpack also properly shows the CSS was reloaded in the console (not the case when the bug is active).

![](console.jpg)

## Remarks

Adding (previously unused) classes in `welcome.blade.php` seems to work fine since BrowserSync reloads the page for you.
