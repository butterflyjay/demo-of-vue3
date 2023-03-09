import { avatar } from "./avatar.js";

const { ref, reactive } = Vue;
export const wechatPage = {
    components: {
        "el-avatar": avatar,
    },
    template: `
        <div class="chat">
            <div class="titleBar">与 XXX 通讯</div>
            <div ref="panelEle" class="panel">
                <el-avatar v-for="item in msgBox" :key="id" :who="item.who"
                    :message="item.message" :type="item.type">
                </el-avatar>
            </div>
            <footer>
                <button class="chooseSticker">
                    <img src="./assets/svg/emoji.svg" alt="" @click="emoji"/>
                    <div ref="emojies" :class="emojiBoxCl">
                    </div>
                </button>
                <input class="messageInput" type="text" placeholder="请输入聊天信息" v-model="textMsg"/>
                <button class="send" @click="sendMsg">发送</button>
            </footer>
        </div>
    `,
    data() {
        return {
            textMsg: "",
            emojiBoxCl: "stickers",
            msgBox: [{
                who: "me",
                message: "你好!"
            }, {
                who: "you",
                message: "Hi!",
            }, {
                who: "me",
                message: "在干什么!",
            }, {
                who: "you",
                message: "在看电影呢!"
            }]
        }
    },
    setup() {
        const emojies = ref(null), panelEle = ref(null);
        const stickers = reactive({
            bomb: {
                path: "./assets/json/3145-bomb.json",
            },
            pumpkin: {
                path: "./assets/json/43215-pumpkins-sticker-4.json",
            },
        })
        return {
            emojies,
            stickers,
            panelEle
        }
    },
    methods: {
        sendMsg() {
            if (this.textMsg.trim()) {
                this.msgBox.push({ who: "me", message: this.textMsg, type: "" });
                this.textMsg = "";
                setTimeout(() => {
                    this.panelEle.scrollTop = this.panelEle.scrollHeight;
                }, 0);
            }
        },
        emoji() {
            this.emojiBoxCl = this.emojiBoxCl === "stickers" ? "stickers show" : "stickers";
        },
        draw() {
            Object.keys(this.stickers).forEach(key => {
                const lottieEle = this.emojies.appendChild(document.createElement("span"));
                this.useLottie(lottieEle, key);
                lottieEle.addEventListener("click", () => {
                    this.msgBox.push({ who: "me", message: "", type: key });
                    // 滚动到最新消息
                    setTimeout(() => {
                        this.panelEle.scrollTop = this.panelEle.scrollHeight;
                    }, 0);
                })
            })
        },
        useLottie(el, key) {
            lottie.loadAnimation({
                container: el,
                renderer: "svg",
                loop: true,
                autoPlay: true,
                path: this.stickers[key].path
            })
        }
    },
    mounted() {
        this.draw();
    }
}