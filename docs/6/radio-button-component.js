var RadioButtonComponent = {
    model: {
        prop: 'model',
        event: 'change'
    },
    props: {
        id:       { type: String, required: true },
        name:     { type: String, required: true },
        value:    { type: String, required: true },
        title:    { type: String, required: false},
        text:     { type: String, required: true },
//        'selected': { type: String, required: true },
        checked: { type: Number, default:0 },
    },
    computed: {
        selectedValue: {
            get() {
                console.log('get: ', this.value, this.id, this.$props.value);
                return this.$props.value;
//                return this.value;
//                return this.id;
            },
            set(value) {
                console.log('set: ', value, this.value, this.id, this.$props.value);
                this.$emit('input', value);
//                this.$emit('input', this.id);
            }
        }
    },
//<input type="radio" :id="id" :name="name" :value="value" v-model="selectedValue">
//<input type="radio" :id="id" :name="name" :value="value" :checked="value === selectedValue" v-model="selectedValue">
//<input type="radio" :id="id" :name="name" :value="value" :checked="value === selected" v-model="selected">
    template: `
        <input type="radio" :id="id" :name="name" :value="value" :checked="value === model" v-model="selectedValue">
        <label              :for="id" :title="title">{{text}}</label>
    `,
}

