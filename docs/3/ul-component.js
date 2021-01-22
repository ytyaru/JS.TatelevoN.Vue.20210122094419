var UlComponent = {
    data() {
        const name = 'color';
        const list = [
           {id:'setting-color-white', value:"white", title:"背景白", text:'白'},
           {id:'setting-color-black', value:"black", title:"背景黒", text:'黒'},
        ];
        return {
            name,
            list,
        }
    },
    template: `
        <ul>
            <li v-for="item of list" :key="item.id">
                <input  id="{{item.id}}" type="radio" name="{{name}}" value="{{item.value}}">
                <label for="{{item.id}}" title="{{item.title}}">{{item.text}}</label>
            </li>
        </ul>
    `,
}

