window.addEventListener('load', (event) => {
    const opt = {
        setup() {
            const message = Vue.ref('Hello Vue.js 3.0.5 !!');
            return {
                message,
            };
        }
    };
    const app = Vue.createApp(opt);
    app.component('ul-component', UlComponent);
    app.mount('#app');
});
