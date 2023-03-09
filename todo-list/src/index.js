import {
  createApp, ref, reactive, toRefs,
  onBeforeMount, onMounted, onBeforeUpdate, onUpdated,
  getCurrentInstance
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
createApp({
  template: `
    <h1>todos</h1>
    <form id="form" @submit.prevent="submit">
      <input type="text" class="input" id="input" placeholder="Enter your todo" autocomplete="off" v-model="value"/>
      <ul class="todos" id="todos" v-for="item in cache">
        <li>{{item}}</li>
      </ul>
    </form>
    <small>Left click to toggle completed. <br> Right click to delete todo</small>
  `,
  //attrs获取当前标签上的所有属性的对象
  setup(props, { attrs, emit, slots }) {
    console.log("attrs: ",attrs," emit: ", emit," slots: ", slots)
    const instance = getCurrentInstance()
    const data = reactive({
      value: "",
      cache: []
    })
    function submit() {
      data.cache.unshift(data.value);
      data.value = "";
    }
    return {
      ...toRefs(data),
      submit
    }
  }
}).mount("div")