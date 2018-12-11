## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

```html
<sm-row>
  <sm-button>Default</sm-button>
  <sm-button type="primary">Primary</sm-button>
  <sm-button type="success">Success</sm-button>
  <sm-button type="info">Info</sm-button>
  <sm-button type="warning">Warning</sm-button>
  <sm-button type="danger">Danger</sm-button>
</sm-row>

<sm-row>
  <sm-button plain>Plain</sm-button>
  <sm-button type="primary" plain>Primary</sm-button>
  <sm-button type="success" plain>Success</sm-button>
  <sm-button type="info" plain>Info</sm-button>
  <sm-button type="warning" plain>Warning</sm-button>
  <sm-button type="danger" plain>Danger</sm-button>
</sm-row>

<sm-row>
  <sm-button round>Round</sm-button>
  <sm-button type="primary" round>Primary</sm-button>
  <sm-button type="success" round>Success</sm-button>
  <sm-button type="info" round>Info</sm-button>
  <sm-button type="warning" round>Warning</sm-button>
  <sm-button type="danger" round>Danger</sm-button>
</sm-row>

<sm-row>
  <sm-button icon="el-icon-search" circle></sm-button>
  <sm-button type="primary" icon="el-icon-edit" circle></sm-button>
  <sm-button type="success" icon="el-icon-check" circle></sm-button>
  <sm-button type="info" icon="el-icon-message" circle></sm-button>
  <sm-button type="warning" icon="el-icon-star-off" circle></sm-button>
  <sm-button type="danger" icon="el-icon-delete" circle></sm-button>
</sm-row>
```
:::

### Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```html
<sm-row>
  <sm-button disabled>Default</sm-button>
  <sm-button type="primary" disabled>Primary</sm-button>
  <sm-button type="success" disabled>Success</sm-button>
  <sm-button type="info" disabled>Info</sm-button>
  <sm-button type="warning" disabled>Warning</sm-button>
  <sm-button type="danger" disabled>Danger</sm-button>
</sm-row>

<sm-row>
  <sm-button plain disabled>Plain</sm-button>
  <sm-button type="primary" plain disabled>Primary</sm-button>
  <sm-button type="success" plain disabled>Success</sm-button>
  <sm-button type="info" plain disabled>Info</sm-button>
  <sm-button type="warning" plain disabled>Warning</sm-button>
  <sm-button type="danger" plain disabled>Danger</sm-button>
</sm-row>
```
:::

### Text Button

Buttons without border and background.

:::demo
```html
<sm-button type="text">Text Button</sm-button>
<sm-button type="text" disabled>Text Button</sm-button>
```
:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<sm-button type="primary" icon="el-icon-edit"></sm-button>
<sm-button type="primary" icon="el-icon-share"></sm-button>
<sm-button type="primary" icon="el-icon-delete"></sm-button>
<sm-button type="primary" icon="el-icon-search">Search</sm-button>
<sm-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></sm-button>
```
:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<sm-button-group>` to group your buttons.

```html
<sm-button-group>
  <sm-button type="primary" icon="el-icon-arrow-left">Previous Page</sm-button>
  <sm-button type="primary">Next Page<i class="el-icon-arrow-right el-icon-right"></i></sm-button>
</sm-button-group>
<sm-button-group>
  <sm-button type="primary" icon="el-icon-edit"></sm-button>
  <sm-button type="primary" icon="el-icon-share"></sm-button>
  <sm-button type="primary" icon="el-icon-delete"></sm-button>
</sm-button-group>
```
:::

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<sm-button type="primary" :loading="true">Loading</sm-button>
```
:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<sm-row>
  <sm-button>Default</sm-button>
  <sm-button size="medium">Medium</sm-button>
  <sm-button size="small">Small</sm-button>
  <sm-button size="mini">Mini</sm-button>
</sm-row>
<sm-row>
  <sm-button round>Default</sm-button>
  <sm-button size="medium" round>Medium</sm-button>
  <sm-button size="small" round>Small</sm-button>
  <sm-button size="mini" round>Mini</sm-button>
</sm-row>
```
:::

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | button size   | string  |   medium / small / mini            |    —     |
| type     | button type   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | determine whether it's a plain button   | boolean    | — | false   |
| round     | determine whether it's a round button   | boolean    | — | false   |
| circle     | determine whether it's a circle button   | boolean    | — | false   |
| loading   | determine whether it's loading   | boolean    | — | false   |
| disabled  | disable the button    | boolean   | —   | false   |
| icon  | icon class name | string   |  —  |  —  |
| autofocus  | same as native button's `autofocus` | boolean   |  —  |  false  |
| native-type | same as native button's `type` | string | button / submit / reset | button |

<style lang="scss">
  .demo-box.demo-button {
    .el-row {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-button + .el-button {
      margin-left: 10px;
    }
    .el-button-group {
      .el-button + .el-button {
        margin-left: 0;
      }

      & + .el-button-group {
        margin-left: 10px;
      }
    }
  }
</style>