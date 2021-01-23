var RadioButtonComponent = {
    props: {
        'id':   { type: String, required: true },
        'name': { type: String, required: true },
        'value':{ type: String, required: true },
        'title':{ type: String, required: false},
        'text': { type: String, required: true },
    },
    computed: {
        selectedValue: {
            get() {
                console.log('get: ', this.value, this.id);
//                return this.value;
                return this.id;
            },
            set(value) {
                console.log('set: ', value, this.value, this.id);
//                this.$emit('input', value);
                this.$emit('input', this.id);
            }
        }
    },
//<input type="radio" :id="id" :name="name" :value="value" v-model="selectedValue">
    template: `
        <input type="radio" :id="id" :name="name" :value="value" :checked="value === id" v-model="selectedValue">
        <label              :for="id" :title="title">{{text}}</label>
    `,
}

