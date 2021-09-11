// App

import {createApp} from 'vue'
import MyComponent from './MyComponent'

createApp({})
    .component('my-component', MyComponent)
    .mount('#app')
