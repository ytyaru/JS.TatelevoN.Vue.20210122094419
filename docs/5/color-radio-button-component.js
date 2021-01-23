var ColorRadioButtonComponent = {
    setup() {
        const name = 'color';
        const selected = Vue.ref('setting-color-black');
        const list = [
           {id:'setting-color-white', value:'white', title:'背景白', text:'白'},
           {id:'setting-color-black', value:'black', title:'背景黒', text:'黒'},
           {id:'setting-color-red',   value:'red',   title:'背景赤', text:'赤'},
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
                    :value="selected"
                    :title="item.title" 
                    :text="item.text"
                    v-model="selected"
                ></radio-button-component>
            </li>
        </ul>
        <p>modelValue: {{modelValue}}</p>
    `,
}

