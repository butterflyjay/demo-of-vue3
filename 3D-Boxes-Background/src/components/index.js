const { ref, reactive } = Vue;

export default {
    template: `
        <button class="magic" @click="magic">Magic 🎩</button>
        <div :class="boxesCln">
            <div class="box" v-for="item in 16"></div>
        </div>
    `,
    setup() {
        const boxesCln = ref("boxes")
        function magic() {
            switch (boxesCln.value) {
                case "boxes":
                    boxesCln.value = "boxes big";
                    break;
                case "boxes big":
                    boxesCln.value = "boxes";
                    break;
            }
        }
        return {
            boxesCln,
            magic
        }
    }
}