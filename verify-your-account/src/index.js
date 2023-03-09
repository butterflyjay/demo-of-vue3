import { createApp, ref, reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import verify from "./component.js"
createApp({
  template: `
    <ui-verify></ui-verify>
  `,
  components: {
    "ui-verify": verify
  },
  setup(props, context) {
    console.log(context)
  }
}).mount("#app")