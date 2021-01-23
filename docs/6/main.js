window.addEventListener('load', (event) => {
    const app = Vue.createApp({});
    app.component('radio-button-component', RadioButtonComponent);
    app.component('color-radio-button-component', ColorRadioButtonComponent);
    app.mount('#app');
});
