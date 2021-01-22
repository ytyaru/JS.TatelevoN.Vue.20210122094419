var UlComponent = {
    data() {
        const list = [
           {text: 'やること１'}, 
           {text: 'やること２'}, 
           {text: 'やること３'}, 
        ];
        return {
            list,
        }
    },
    template: `
        <ul>
            <li v-for="item of list">{{item.text}}</li>
        </ul>
    `,
}

