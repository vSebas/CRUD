import Vue from 'vue'
import App from './components/App.vue'

alert('dd');

const app = Vue.createApp(App); // Se va a renderizar h, que es una funcion que va montada en App
app.mount('#app'); // Va montado en div app

module.exports = {app}