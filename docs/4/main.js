window.addEventListener('load', (event) => {
    const app = Vue.createApp({});
    app.component('radio-button-component', RadioButtonComponent);
    app.mount('#app');
});
