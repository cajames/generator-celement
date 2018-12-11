## Breadcrumb

Displays the location of the current page, making it easier to browser back.

### Basic usage


:::demo In `el-breadcrumb`, each `el-breadcrumb-item` is a tag that stands for every level starting from homepage. This component has a `String` attribute `separator`, and it determines the separator. Its default value is '/'.

```html
<<%= sysAbb %>-breadcrumb separator="/">
  <<%= sysAbb %>-breadcrumb-item :to="{ path: '/' }">homepage</<%= sysAbb %>-breadcrumb-item>
  <<%= sysAbb %>-breadcrumb-item><a href="/">promotion management</a></<%= sysAbb %>-breadcrumb-item>
  <<%= sysAbb %>-breadcrumb-item>promotion list</<%= sysAbb %>-breadcrumb-item>
  <<%= sysAbb %>-breadcrumb-item>promotion detail</<%= sysAbb %>-breadcrumb-item>
</<%= sysAbb %>-breadcrumb>
```
:::

### Icon separator

:::demo Set `separator-class` to use `iconfont` as the separator，it will cover `separator`

```html
<<%= sysAbb %>-breadcrumb separator-class="el-icon-arrow-right">
  <<%= sysAbb %>-breadcrumb-item :to="{ path: '/' }">homepage</<%= sysAbb %>-breadcrumb-item>
  <<%= sysAbb %>-breadcrumb-item>promotion management</<%= sysAbb %>-breadcrumb-item>
  <<%= sysAbb %>-breadcrumb-item>promotion list</<%= sysAbb %>-breadcrumb-item>
  <<%= sysAbb %>-breadcrumb-item>promotion detail</<%= sysAbb %>-breadcrumb-item>
</<%= sysAbb %>-breadcrumb>
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





