const { ref, reactive, toRefs, toRef, onUpdated } = Vue;

export default {
  template: `
    <nav class="nav" ref="nav">
      <div class="container">
        <h1 class="logo"><a href="javascript:void 0">{{title}}</a></h1>
        <ul>
          <li v-for="item in navList"><a href="javascript:void 0">{{item}}</a></li>
        </ul>
      </div>
    </nav>
  `,
  setup(props, context) {
    const navList = reactive(["Home", "About", "Services", "Contact"]);
    const nav = ref(null);
    function throttle(fn, time) {
      let canRun = true;
      return function () {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
          fn.apply(this, arguments);
          canRun = true;
        }, time)
      }
    }
    window.addEventListener("scroll", throttle(function () {
      if (window.scrollY > nav.value.offsetHeight + 150) {
        nav.value.classList.add("active");
      } else {
        nav.value.classList.remove("active");
      }
    }, 100))
    return {
      ...toRefs(reactive(context.attrs)),
      navList,
      nav
    }
  }
}