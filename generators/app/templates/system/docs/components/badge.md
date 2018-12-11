## Badge

A number or status mark on buttons and icons.

### Basic usage

Displays the amount of new messages.

:::demo The amount is defined with `value` which accepts `Number` or `String`.

```html
<<%= sysAbb %>-badge :value="12" class="item">
  <<%= sysAbb %>-button size="small">comments</<%= sysAbb %>-button>
</<%= sysAbb %>-badge>
<<%= sysAbb %>-badge :value="3" class="item">
  <<%= sysAbb %>-button size="small">replies</<%= sysAbb %>-button>
</<%= sysAbb %>-badge>
<<%= sysAbb %>-badge :value="1" class="item" type="primary">
  <<%= sysAbb %>-button size="small">comments</<%= sysAbb %>-button>
</<%= sysAbb %>-badge>
<<%= sysAbb %>-badge :value="2" class="item" type="warning">
  <<%= sysAbb %>-button size="small">replies</<%= sysAbb %>-button>
</<%= sysAbb %>-badge>

<<%= sysAbb %>-dropdown trigger="click">
  <span class="el-dropdown-link">
    Click Me<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <<%= sysAbb %>-dropdown-menu slot="dropdown">
    <<%= sysAbb %>-dropdown-item class="clearfix">
      comments
      <<%= sysAbb %>-badge class="mark" :value="12" />
    </<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item class="clearfix">
      replies
      <<%= sysAbb %>-badge class="mark" :value="3" />
    </<%= sysAbb %>-dropdown-item>
  </<%= sysAbb %>-dropdown-menu>
</<%= sysAbb %>-dropdown>

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
<<%= sysAbb %>-badge :value="200" :max="99" class="item">
  <<%= sysAbb %>-button size="small">comments</<%= sysAbb %>-button>
</<%= sysAbb %>-badge>
<<%= sysAbb %>-badge :value="100" :max="10" class="item">
  <<%= sysAbb %>-button size="small">replies</<%= sysAbb %>-button>
</<%= sysAbb %>-badge>

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
<<%= sysAbb %>-badge value="new" class="item">
  <<%= sysAbb %>-button size="small">comments</<%= sysAbb %>-button>
</<%= sysAbb %>-badge>
<<%= sysAbb %>-badge value="hot" class="item">
  <<%= sysAbb %>-button size="small">replies</<%= sysAbb %>-button>
</<%= sysAbb %>-badge>

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
<<%= sysAbb %>-badge is-dot class="item">query</<%= sysAbb %>-badge>
<<%= sysAbb %>-badge is-dot class="item">
  <<%= sysAbb %>-button class="share-button" icon="el-icon-share" type="primary"></<%= sysAbb %>-button>
</<%= sysAbb %>-badge>

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
