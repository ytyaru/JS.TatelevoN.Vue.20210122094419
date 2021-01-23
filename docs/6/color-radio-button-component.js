var ColorRadioButtonComponent = {
    setup() {
        const name = 'color';
//        const selected = Vue.ref('setting-color-black');
        const selected = Vue.ref('black');
//        const selected = 'black';
        const list = [
            {id:'setting-color-white', value:'white', title:'背景白', text:'白'},
            {id:'setting-color-black', value:'black', title:'背景黒', text:'黒'},
            {id:'setting-color-red',   value:'red',   title:'背景赤', text:'赤'},
            /*
            {id:'setting-color-white', value:'white', title:'背景白', text:'白', selected: selected },
            {id:'setting-color-black', value:'black', title:'背景黒', text:'黒', selected: selected },
            {id:'setting-color-red',   value:'red',   title:'背景赤', text:'赤', selected: selected },
           */
        ];
        return {
            name,
            selected,
            list,
        }
    },
    template: `
        <ul>
            <li v-for="item of list" :key="item.id">
                <radio-button-component 
                    :id="item.id" 
                    :name="name" 
                    :value="item.value"
                    :title="item.title" 
                    :text="item.text"
                    v-model="selected"
                ></radio-button-component>
            </li>
        </ul>
        <p>modelValue: {{selected}}</p>
    `,
    methods: {
        changeValue: function(value) {
            console.log('changeValue', value);
            this.selected = value;
        }
    }
    /*
    computed: {
        get() {
            return this.selected;
        },
        set(value) {
            this.selected = value;
        }
    }
    */
}

