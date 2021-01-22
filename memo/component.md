# TatelevoNのHTML構成を考える

　Vue.js 3 のコンポーネントを使う。どう分割すべきか？

## アプリ本体

```html
<div id="app"></div>
```
```html
<div id="app">
    <tatelevon-viewer></tatelevon-viewer>
</div>
```
```html
<div id="app">
    <tatelevon-viewer-setting></tatelevon-viewer-setting>
    <tatelevon-viewer></tatelevon-viewer>
</div>
```
```html
<div id="tatelevon-viewer">
    <tatelevon-viewer-setting></tatelevon-viewer-setting>
    <tatelevon-viewer-view></tatelevon-viewer-view>
</div>
```

## メニュー

### 上

　画面上部をマウスオーバーすると出てくる。

```html
<div id="tatelevon-viewer-top-menu">
    <menu-navi></menu-navi>
    <menu-metadata></menu-metadata>
    <menu-setting></menu-setting>
</div>
```

　本コンテンツの親を示す。パンくずリストなど。または本コンテンツのタイトル。著者。

　画面エフェクトはカメラを下から上へ移動したようにする。親画面の下部が画面上部から下へ降りてくる。やがて全面がみえるまで降りれば完了。

```
+------+
|親画面|
+------+
+------+
|子画面|
+------+
```

### 下

　画面下部をマウスオーバーすると出てくる。

```html
<div id="tatelevon-viewer-bottom-menu">
    <menu-navi></menu-navi>
    <menu-metadata></menu-metadata>
    <menu-relation-contents></menu-relation-contents>
</div>
```

　本コンテンツの子コンテンツを示す。メイキング情報など。または本コンテンツの詳細メタデータ。日時、字数。
　
　画面エフェクトはX軸を中心に回転する。ホワイトボードを回転させる感じ。

### 設定

```html
<div id="menu-setting">
    <setting-color></setting-color>
    <setting-font-size></setting-font-size>
    <setting-font-family></setting-font-family>
    <setting-writing-direction></setting-writing-direction>
</div>
```

　`<ul>`で囲みたい。

```html
<ul>
    <li><menu-color></menu-color></li>
    <li><menu-font-size></menu-font-size></li>
    <li><menu-font-family></menu-font-family></li>
    <li><menu-writing-direction></menu-writing-direction></li>
</ul>
```

　`<li>`の中身は`<input>`と`<label>`。

```html
<li>
    <input  id="setting-color-white" type="radio" name="color" value="white">
    <label for="setting-color-white" title="背景白">白</label>
</li>
```

変数|用途
----|----
`id`|識別子。
`name`|`id`に統一してもいいかも？
`value`|選択した時に返される値。CSSに反映する値。
`title`|マウスオーバー時にポップアップするテキスト
textNode.value|表示する内容

### ナビ

#### 上

```html
<div id="tatelevon-viewer-navi">
    <menu-index></menu-index>
</div>
```

```html
<div id="tatelevon-viewer-navi">
    <menu-home></menu-home>
    <menu-about></menu-about>
    <menu-author></menu-author>
    <menu-index></menu-index>
</div>
```

#### 下

```html
<div id="tatelevon-viewer-navi-bottom">
    <menu-making></menu-making>
</div>
```

#### 左右

```html
<div id="tatelevon-viewer-navi-left">
    <menu-next></menu-next>
</div>
```

```html
<div id="tatelevon-viewer-navi-right">
    <menu-prev></menu-prev>
</div>
```

### メタデータ

　作品のメタデータ。

```html
<div id="tatelevon-viewer-metadata">
    <menu-title></menu-title>
    <menu-author></menu-author>
    <menu-created></menu-created>
    <menu-updated></menu-updated>
    <menu-char-count></menu-char-count>
</div>
```

　作品メイキングのメタデータ。

```html
<div id="tatelevon-viewer-metadata">
    <making-work-thema></making-work-thema>
</div>
```

* 課題タイプ
    * オチ
    * 描写
    * レトリック
    * 説明
    * パラグラフライティング

* オチ
    * 表：A
    * 裏：B
    * Aと思わせるよう描写しつつじつはBでしたというオチ

