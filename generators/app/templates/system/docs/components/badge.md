## Badge

A number or status mark on buttons and icons.

### Basic usage

Displays the amount of new messages.

:::demo The amount is defined with `value` which accepts `Number` or `String`.

```html
<sm-badge :value="12" class="item">
  <sm-button size="small">comments</sm-button>
</sm-badge>
<sm-badge :value="3" class="item">
  <sm-button size="small">replies</sm-button>
</sm-badge>
<sm-badge :value="1" class="item" type="primary">
  <sm-button size="small">comments</sm-button>
</sm-badge>
<sm-badge :value="2" class="item" type="warning">
  <sm-button size="small">replies</sm-button>
</sm-badge>

<sm-dropdown trigger="click">
  <span class="el-dropdown-link">
    Click Me<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <sm-dropdown-menu slot="dropdown">
    <sm-dropdown-item class="clearfix">
      comments
      <sm-badge class="mark" :value="12" />
    </sm-dropdown-item>
    <sm-dropdown-item class="clearfix">
      replies
      <sm-badge class="mark" :value="3" />
    </sm-dropdown-item>
  </sm-dropdown-menu>
</sm-dropdown>

<style lang="scss">
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Max value

You can customize the max value.

:::demo The max value is defined by property `max` which is a `Number`. Note that it only works when `value` is also a `Number`.

```html
<sm-badge :value="200" :max="99" class="item">
  <sm-button size="small">comments</sm-button>
</sm-badge>
<sm-badge :value="100" :max="10" class="item">
  <sm-button size="small">replies</sm-button>
</sm-badge>

<style lang="scss">
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Customizations

Displays text content other than numbers.

:::demo When `value` is a `String`, it can display customized text.

```html
<sm-badge value="new" class="item">
  <sm-button size="small">comments</sm-button>
</sm-badge>
<sm-badge value="hot" class="item">
  <sm-button size="small">replies</sm-button>
</sm-badge>

<style lang="scss">
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Little red dot

Use a red dot to mark content that needs to be noticed.

:::demo Use the attribute `is-dot`. It is a `Boolean`.

```html
<sm-badge is-dot class="item">query</sm-badge>
<sm-badge is-dot class="item">
  <sm-button class="share-button" icon="el-icon-share" type="primary"></sm-button>
</sm-badge>

<style lang="scss">
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

<style scoped>
  .share-button {
    width: 36px;
    padding: 10px;
  }

  .mark {
    margin-top: 8px;
    line-height: 1;
    float: right;
  }

  .clearfix {
    @utils-clearfix;
  }

  .item {
    margin-right: 40px;
  }
</style>

### Attributes
| Attribute     | Description     | Type            | Accepted Values       | Default |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | display value   | string, number  |          —            |    —    |
| max           |  maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number`   | number  |         —              |     —    |
| is-dot        | if a little dot is displayed | boolean   |    —           |  false  |
| hidden        | hidden badge    | boolean         |          —            |  false  |
| type          | button type     | string          | primary / success / warning / danger / info |   —  |
