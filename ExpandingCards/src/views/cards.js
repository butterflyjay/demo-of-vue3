const { ref, reactive } = Vue;

export const cards = {
    props: {
        item: Object
    },
    template: `
        <div :class="item.clN" :style="subStyle" @click="active">
            <h3>{{item.des}}</h3>
        </div>
    `,
    setup(props, context) {
        const subStyle = ref("background-image: url(" + props.item.url + ");");
        return {
            subStyle
        }
    },
    methods: {
        active(event) {
            this.$parent.active();
            this.item.clN = "panel active";
        }
    }
}