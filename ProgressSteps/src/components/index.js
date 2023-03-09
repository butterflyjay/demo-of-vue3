const { ref, reactive } = Vue;
export default {
    template: `
        <div class="container">
            <div class="progress-container">
                <div ref="line" class="progress" id="progress"></div>
                <div v-for="(item,idx) in circles" :key="idx" :class="item.clN">{{item.num}}</div>
            </div>
            <button ref="prevBtn" class="btn" id="prev" disabled @click="prev">Prev</button>
            <button ref="nextBtn" class="btn" id="next" @click="next">Next</button>
        </div>
    `,

    setup() {
        const currentNum = ref(1);
        const line = ref(null), prevBtn = ref(null), nextBtn = ref(null);
        const circles = reactive([{ clN: "circle active", num: 1 },
        { clN: "circle", num: 2 },
        { clN: "circle", num: 3 },
        { clN: "circle", num: 4 }]);
        function update() {
            circles.forEach((item, idx) => {
                if (idx < currentNum.value) {
                    item.clN = "circle active";
                } else {
                    item.clN = "circle";
                }
            })
            prevBtn.value.disabled = currentNum.value === 1 ? true : false;
            nextBtn.value.disabled = currentNum.value === 4 ? true : false;
            line.value.style.width = (currentNum.value - 1) / (circles.length - 1) * 100 + "%";
        }
        function prev(e) {
            if (currentNum.value <= circles.length && currentNum.value > 1) {
                currentNum.value--;
                update();
            }
        }
        function next(e) {
            if (currentNum.value < circles.length && currentNum.value >= 1) {
                currentNum.value++;
                update();
            }
        }
        return {
            prev,
            next,
            line,
            circles,
            currentNum,
            prevBtn,
            nextBtn
        }
    }
}