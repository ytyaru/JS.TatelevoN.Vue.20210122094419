window.addEventListener('load', (event) => {
    const app = Vue.createApp({});
    app.component('ul-component', UlComponent);
    app.mount('#app');
});
