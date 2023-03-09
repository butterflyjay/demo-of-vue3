const { ref, reactive } = Vue;
export const avatar = {
    props: {
        message: String,
        who: String,
        type: String,
    },
    template: `
        <div ref="lottieMsg" :class="avatarCl">
            <img class="avatar" :src="avatarSrc" alt=""/>
        </div>
    `,
    data() {
        return {
        }
    },
    setup(props, context) {
        const avatarCl = ref(""), avatarSrc = ref(""), lottieMsg = ref(null);
        const stickers = reactive({
            bomb: {
                path: "./assets/json/3145-bomb.json",
            },
            pumpkin: {
                path: "./assets/json/43215-pumpkins-sticker-4.json",
            },
        })
        switch (props.who) {
            case "me":
                avatarCl.value = "message mine";
                avatarSrc.value = "./assets/images/me.png";
                break;
            case "you":
                avatarCl.value = "message yours";
                avatarSrc.value = "./assets/images/you.png";
                break;
        };
        return {
            avatarCl,
            avatarSrc,
            lottieMsg,
            stickers,
        }
    },
    methods: {
        useLottie(el, key) {
            lottie.loadAnimation({
                container: el,
                renderer: "svg",
                loop: true,
                autoPlay: true,
                path: this.stickers[key].path
            })
        },
        draw() {
            const span = this.lottieMsg.appendChild(document.createElement("p"))
                .appendChild(document.createElement("span"));
            span.style.height = span.style.width = "40px";
            this.useLottie(span, this.type);
        }
    },
    mounted() {
        if (this.type) {
            this.draw();
        } else if (this.message) {
            const span = this.lottieMsg.appendChild(document.createElement("p"))
                .appendChild(document.createElement("span"));
            span.innerHTML = this.message;
        }

    }
}

