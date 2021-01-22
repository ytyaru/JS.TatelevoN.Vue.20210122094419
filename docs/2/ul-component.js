var UlComponent = {
    data() {
        const list = [
           {id: 0, text: 'やること１'},
           {id: 1, text: 'やること２'},
           {id: 2, text: 'やること３'},
        ];
        return {
            list,
        }
    },
    template: `
        <ul>
            <li v-for="item of list" :key="item.id">{{item.text}}</li>
        </ul>
    `,
}

