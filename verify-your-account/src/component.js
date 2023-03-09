import { ref, reactive, onUpdated, nextTick, onMounted, onBeforeUpdate } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
export default {
  template: `
    <div class="container">
      <h1>Verify Your Account</h1>
      <p>We emailed you the six digit code to cool_guy@email.com <br>
        Enter the code below to confirm your email address.
      </p>
      <div class="code-container" ref="codeBox">
        <input v-for="(item,idx) in numBox" v-myFocus="item.isFocus" @keydown="fn($event,idx)" 
        v-model="item.value" type="number" class="code" placeholder="0"
        max="9" min="0" required>
      </div>
      <small class="info">
        This is design only.  We didn't actually send you an email as we don't have your email, right?
      </small>
    </div>
  `,
  directives: {
    "myFocus": {
      mounted: (el, binding) => {
        if (binding.value) {
          el.focus();
        }
      }
    }
  }
  ,
  setup(props, context) {
    const numBox = reactive(Array(6).fill(0).map((val, idx) =>
      ({ value: "", isFocus: idx === 0 ? true : false })));
    const codeBox = ref(null);
    const fn = (e, idx) => {
      if (0 <= e.key && e.key <= 9) {
        if (Number(idx) === 5) {
          codeBox.value.children[idx].value = "";
          return;
        } else {
          codeBox.value.children[idx].value = "";
          setTimeout(() => {
            codeBox.value.children[idx + 1].focus();
          }, 10)
        }
      } else if (e.key === "Backspace") {
        if (idx == 0) {
          return;
        } else {
          setTimeout(() => {
            codeBox.value.children[idx - 1].focus();
          }, 10)
        }
      }
    }
    return {
      numBox,
      fn,
      codeBox
    }
  }
}