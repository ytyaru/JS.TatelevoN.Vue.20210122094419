# ラジオボタン

```html
<ul>
    <li v-for="item of list" :key="item.id">
        <input  id="{{item.id}}" type="radio" name="{{name}}" value="{{item.value}}" :value="selected" @input="$emit('update:value', $event.target.value)">
        <label for="{{item.id}}" title="{{item.title}}">{{item.text}}</label>
    </li>
</ul>
```

```html
<fieldset>
    <template v-for="(item, index) in list">
        <input  id="{{item.id}}" type="radio" name="{{name}}" value="{{item.value}}" v-model="selected">
        <label for="{{item.id}}" title="{{item.title}}">{{item.text}}</label>
    </template>
</fieldset>
```

