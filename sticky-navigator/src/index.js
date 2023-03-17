import navigator from "./component/navigator.js";
import content from "./component/content.js";
const { createApp, ref, reactive } = Vue;

const app = createApp({
  template: `
    <Navigator :title="navTitle"></Navigator>
    <Content></Content>
  `,
  setup() {
    const navTitle = ref("My Website");
    return {
      navTitle
    }
  }
})
app.component("Navigator", navigator)
app.component("Content", content)
app.mount("#app");