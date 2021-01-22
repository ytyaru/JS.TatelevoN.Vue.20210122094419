window.addEventListener('load', (event) => {
    const opt = {
        setup() {
            const message = Vue.ref('Hello Vue.js 3.0.5 !!');
            return {
                message,
            };
        }
    };
    Vue.createApp(opt).mount('#app');
});
