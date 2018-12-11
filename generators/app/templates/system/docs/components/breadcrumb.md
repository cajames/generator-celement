## Breadcrumb

Displays the location of the current page, making it easier to browser back.

### Basic usage


:::demo In `el-breadcrumb`, each `el-breadcrumb-item` is a tag that stands for every level starting from homepage. This component has a `String` attribute `separator`, and it determines the separator. Its default value is '/'.

```html
<sm-breadcrumb separator="/">
  <sm-breadcrumb-item :to="{ path: '/' }">homepage</sm-breadcrumb-item>
  <sm-breadcrumb-item><a href="/">promotion management</a></sm-breadcrumb-item>
  <sm-breadcrumb-item>promotion list</sm-breadcrumb-item>
  <sm-breadcrumb-item>promotion detail</sm-breadcrumb-item>
</sm-breadcrumb>
```
:::

### Icon separator

:::demo Set `separator-class` to use `iconfont` as the separator，it will cover `separator`

```html
<sm-breadcrumb separator-class="el-icon-arrow-right">
  <sm-breadcrumb-item :to="{ path: '/' }">homepage</sm-breadcrumb-item>
  <sm-breadcrumb-item>promotion management</sm-breadcrumb-item>
  <sm-breadcrumb-item>promotion list</sm-breadcrumb-item>
  <sm-breadcrumb-item>promotion detail</sm-breadcrumb-item>
</sm-breadcrumb>
```
:::

### Breadcrumb Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | separator character | string | — | / |
| separator-class | class name of icon separator | string | — | - |

### Breadcrumb Item Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | target route of the link, same as `to` of `vue-router` | string/object | — | — |
| replace | if `true`, the navigation will not leave a history record | boolean | — | false |





