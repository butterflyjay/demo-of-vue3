const { ref, reactive, toRefs, toRef, onUpdated, h } = Vue;

export default {
  setup(props, context) {
    return () => {
      return [
        h("div", { className: "hero" }, h("div", { className: "container" },
          [
            h("h1", null, "Welcome to My Website"),
            h("p", null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?")
          ])),
        h("section", { className: "container content" }, [
          h("h2", null, "Content One"),
          h("p", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!"),
          h("h3", null, "Content Two"),
          h("p", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit provident, voluptates illo odio nostrum minima beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque quae iste aperiam hic cumque repellat?")
        ])
      ]
    }
  }
}