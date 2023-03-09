import VueEntry from "./views/index.js";

const app = Vue.createApp({
    components: {
        "vue-entry": VueEntry
    },
    template: `
        <vue-entry></vue-entry>
    `
});

const vm = app.mount("#app");