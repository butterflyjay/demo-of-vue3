import { cards } from "./views/cards.js";
const { ref, reactive } = Vue;
const app = Vue.createApp({
    components: {
        "el-card": cards
    },
    template: `
        <div class="container">
            <el-card v-for="(item, id) in cardsBox" :key="id" :item="item">
            </el-card>
        </div>
    `,
    setup() {
        const cardsBox = reactive([{
            clN: "panel active",
            des: "Explore The World",
            url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }, {
            clN: "panel",
            des: "Wild Forest",
            url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }, {
            clN: "panel",
            des: "Sunny Beach",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
        }, {
            clN: "panel",
            des: "City on Winter",
            url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        }, {
            clN: "panel",
            des: "Mountains-Clouds",
            url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }]);
        function active() {
            cardsBox.forEach(el => {
                el.clN = "panel";
            });
        }
        return {
            cardsBox,
            active
        }
    }

});

const vm = app.mount("#app");
