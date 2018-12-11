## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

```html
<<%= sysAbb %>-row>
  <<%= sysAbb %>-button>Default</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="primary">Primary</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="success">Success</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="info">Info</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="warning">Warning</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="danger">Danger</<%= sysAbb %>-button>
</<%= sysAbb %>-row>

<<%= sysAbb %>-row>
  <<%= sysAbb %>-button plain>Plain</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="primary" plain>Primary</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="success" plain>Success</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="info" plain>Info</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="warning" plain>Warning</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="danger" plain>Danger</<%= sysAbb %>-button>
</<%= sysAbb %>-row>

<<%= sysAbb %>-row>
  <<%= sysAbb %>-button round>Round</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="primary" round>Primary</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="success" round>Success</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="info" round>Info</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="warning" round>Warning</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="danger" round>Danger</<%= sysAbb %>-button>
</<%= sysAbb %>-row>

<<%= sysAbb %>-row>
  <<%= sysAbb %>-button icon="el-icon-search" circle></<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="primary" icon="el-icon-edit" circle></<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="success" icon="el-icon-check" circle></<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="info" icon="el-icon-message" circle></<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="warning" icon="el-icon-star-off" circle></<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="danger" icon="el-icon-delete" circle></<%= sysAbb %>-button>
</<%= sysAbb %>-row>
```
:::

### Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```html
<<%= sysAbb %>-row>
  <<%= sysAbb %>-button disabled>Default</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="primary" disabled>Primary</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="success" disabled>Success</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="info" disabled>Info</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="warning" disabled>Warning</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="danger" disabled>Danger</<%= sysAbb %>-button>
</<%= sysAbb %>-row>

<<%= sysAbb %>-row>
  <<%= sysAbb %>-button plain disabled>Plain</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="primary" plain disabled>Primary</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="success" plain disabled>Success</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="info" plain disabled>Info</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="warning" plain disabled>Warning</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="danger" plain disabled>Danger</<%= sysAbb %>-button>
</<%= sysAbb %>-row>
```
:::

### Text Button

Buttons without border and background.

:::demo
```html
<<%= sysAbb %>-button type="text">Text Button</<%= sysAbb %>-button>
<<%= sysAbb %>-button type="text" disabled>Text Button</<%= sysAbb %>-button>
```
:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<<%= sysAbb %>-button type="primary" icon="el-icon-edit"></<%= sysAbb %>-button>
<<%= sysAbb %>-button type="primary" icon="el-icon-share"></<%= sysAbb %>-button>
<<%= sysAbb %>-button type="primary" icon="el-icon-delete"></<%= sysAbb %>-button>
<<%= sysAbb %>-button type="primary" icon="el-icon-search">Search</<%= sysAbb %>-button>
<<%= sysAbb %>-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></<%= sysAbb %>-button>
```
:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<<%= sysAbb %>-button-group>` to group your buttons.

```html
<<%= sysAbb %>-button-group>
  <<%= sysAbb %>-button type="primary" icon="el-icon-arrow-left">Previous Page</<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="primary">Next Page<i class="el-icon-arrow-right el-icon-right"></i></<%= sysAbb %>-button>
</<%= sysAbb %>-button-group>
<<%= sysAbb %>-button-group>
  <<%= sysAbb %>-button type="primary" icon="el-icon-edit"></<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="primary" icon="el-icon-share"></<%= sysAbb %>-button>
  <<%= sysAbb %>-button type="primary" icon="el-icon-delete"></<%= sysAbb %>-button>
</<%= sysAbb %>-button-group>
```
:::

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<<%= sysAbb %>-button type="primary" :loading="true">Loading</<%= sysAbb %>-button>
```
:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<<%= sysAbb %>-row>
  <<%= sysAbb %>-button>Default</<%= sysAbb %>-button>
  <<%= sysAbb %>-button size="medium">Medium</<%= sysAbb %>-button>
  <<%= sysAbb %>-button size="small">Small</<%= sysAbb %>-button>
  <<%= sysAbb %>-button size="mini">Mini</<%= sysAbb %>-button>
</<%= sysAbb %>-row>
<<%= sysAbb %>-row>
  <<%= sysAbb %>-button round>Default</<%= sysAbb %>-button>
  <<%= sysAbb %>-button size="medium" round>Medium</<%= sysAbb %>-button>
  <<%= sysAbb %>-button size="small" round>Small</<%= sysAbb %>-button>
  <<%= sysAbb %>-button size="mini" round>Mini</<%= sysAbb %>-button>
</<%= sysAbb %>-row>
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