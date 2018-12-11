<style lang="scss">
  .demo-box {
    .el-dropdown {
      vertical-align: top;

      & + .el-dropdown {
        margin-left: 15px;
      }
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #409EFF;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }

  .block-col-2 {
    margin: -24px;

    .el-col {
      padding: 30px 0;
      text-align: center;
      border-right: 1px solid #eff2f6;

      &:last-child {
        border-right: 0;
      }
    }
  }

 .demo-dropdown .demonstration {
   display: block;
   color: #8492a6;
   font-size: 14px;
   margin-bottom: 20px;
 }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      },
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>
## Dropdown
Toggleable menu for displaying lists of links and actions.

### Basic usage
Hover on the dropdown menu to unfold it for more actions.

:::demo The triggering element is rendered by the default `slot`, and the dropdown part is rendered by the `slot` named `dropdown`. By default, dropdown list shows when you hover on the triggering element without having to click it.

```html
<<%= sysAbb %>-dropdown>
  <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <<%= sysAbb %>-dropdown-menu slot="dropdown">
    <<%= sysAbb %>-dropdown-item>Action 1</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 2</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 3</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item disabled>Action 4</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item divided>Action 5</<%= sysAbb %>-dropdown-item>
  </<%= sysAbb %>-dropdown-menu>
</<%= sysAbb %>-dropdown>

<style lang="scss">
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

```

:::

### Triggering element

Use the button to trigger the dropdown list.

:::demo Use `split-button` to split the triggering element into a button group with the left button being a normal button and right one the actual triggering target. If you wanna insert a separator line between item three and item four, just add a class `divider` to item four.
```html
<<%= sysAbb %>-dropdown>
  <<%= sysAbb %>-button type="primary">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </<%= sysAbb %>-button>
  <<%= sysAbb %>-dropdown-menu slot="dropdown">
    <<%= sysAbb %>-dropdown-item>Action 1</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 2</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 3</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 4</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 5</<%= sysAbb %>-dropdown-item>
  </<%= sysAbb %>-dropdown-menu>
</<%= sysAbb %>-dropdown>
<<%= sysAbb %>-dropdown split-button type="primary" @click="handleClick">
  Dropdown List
  <<%= sysAbb %>-dropdown-menu slot="dropdown">
    <<%= sysAbb %>-dropdown-item>Action 1</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 2</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 3</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 4</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 5</<%= sysAbb %>-dropdown-item>
  </<%= sysAbb %>-dropdown-menu>
</<%= sysAbb %>-dropdown>

<style lang="scss">
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>
```
:::

### How to trigger

Click the triggering element or hover on it.

:::demo Use the attribute `trigger`. By default, it is `hover`.

```html
<<%= sysAbb %>-row class="block-col-2">
  <<%= sysAbb %>-col :span="12">
    <span class="demonstration">hover to trigger</span>
    <<%= sysAbb %>-dropdown>
      <span class="el-dropdown-link">
        Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <<%= sysAbb %>-dropdown-menu slot="dropdown">
        <<%= sysAbb %>-dropdown-item>Action 1</<%= sysAbb %>-dropdown-item>
        <<%= sysAbb %>-dropdown-item>Action 2</<%= sysAbb %>-dropdown-item>
        <<%= sysAbb %>-dropdown-item>Action 3</<%= sysAbb %>-dropdown-item>
        <<%= sysAbb %>-dropdown-item>Action 4</<%= sysAbb %>-dropdown-item>
        <<%= sysAbb %>-dropdown-item>Action 5</<%= sysAbb %>-dropdown-item>
      </<%= sysAbb %>-dropdown-menu>
    </<%= sysAbb %>-dropdown>
  </<%= sysAbb %>-col>
  <<%= sysAbb %>-col :span="12">
    <span class="demonstration">click to trigger</span>
    <<%= sysAbb %>-dropdown trigger="click">
      <span class="el-dropdown-link">
        Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <<%= sysAbb %>-dropdown-menu slot="dropdown">
        <<%= sysAbb %>-dropdown-item>Action 1</<%= sysAbb %>-dropdown-item>
        <<%= sysAbb %>-dropdown-item>Action 2</<%= sysAbb %>-dropdown-item>
        <<%= sysAbb %>-dropdown-item>Action 3</<%= sysAbb %>-dropdown-item>
        <<%= sysAbb %>-dropdown-item>Action 4</<%= sysAbb %>-dropdown-item>
        <<%= sysAbb %>-dropdown-item>Action 5</<%= sysAbb %>-dropdown-item>
      </<%= sysAbb %>-dropdown-menu>
    </<%= sysAbb %>-dropdown>
  </<%= sysAbb %>-col>
</<%= sysAbb %>-row>

<style lang="scss">
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
```
:::

### Menu hiding behavior

Use `hide-on-click` to define if menu closes on clicking.

:::demo By default menu will close when you click on menu items, and it can be turned off by setting hide-on-click to false.
```html
<<%= sysAbb %>-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <<%= sysAbb %>-dropdown-menu slot="dropdown">
    <<%= sysAbb %>-dropdown-item>Action 1</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 2</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 3</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item disabled>Action 4</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item divided>Action 5</<%= sysAbb %>-dropdown-item>
  </<%= sysAbb %>-dropdown-menu>
</<%= sysAbb %>-dropdown>

<style lang="scss">
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
```
:::

### Command event

Clicking each dropdown item fires an event whose parameter is assigned by each item.

:::demo
```html
<<%= sysAbb %>-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <<%= sysAbb %>-dropdown-menu slot="dropdown">
    <<%= sysAbb %>-dropdown-item command="a">Action 1</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item command="b">Action 2</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item command="c">Action 3</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item command="d" disabled>Action 4</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item command="e" divided>Action 5</<%= sysAbb %>-dropdown-item>
  </<%= sysAbb %>-dropdown-menu>
</<%= sysAbb %>-dropdown>

<style lang="scss">
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>
```
:::

### Sizes

Besides default size, Dropdown component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<<%= sysAbb %>-dropdown split-button type="primary">
  Default
  <<%= sysAbb %>-dropdown-menu slot="dropdown">
    <<%= sysAbb %>-dropdown-item>Action 1</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 2</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 3</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 4</<%= sysAbb %>-dropdown-item>
  </<%= sysAbb %>-dropdown-menu>
</<%= sysAbb %>-dropdown>

<<%= sysAbb %>-dropdown size="medium" split-button type="primary">
  Medium
  <<%= sysAbb %>-dropdown-menu slot="dropdown">
    <<%= sysAbb %>-dropdown-item>Action 1</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 2</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 3</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 4</<%= sysAbb %>-dropdown-item>
  </<%= sysAbb %>-dropdown-menu>
</<%= sysAbb %>-dropdown>

<<%= sysAbb %>-dropdown size="small" split-button type="primary">
  Small
  <<%= sysAbb %>-dropdown-menu slot="dropdown">
   <<%= sysAbb %>-dropdown-item>Action 1</<%= sysAbb %>-dropdown-item>
   <<%= sysAbb %>-dropdown-item>Action 2</<%= sysAbb %>-dropdown-item>
   <<%= sysAbb %>-dropdown-item>Action 3</<%= sysAbb %>-dropdown-item>
   <<%= sysAbb %>-dropdown-item>Action 4</<%= sysAbb %>-dropdown-item>
  </<%= sysAbb %>-dropdown-menu>
</<%= sysAbb %>-dropdown>

<<%= sysAbb %>-dropdown size="mini" split-button type="primary">
  Mini
  <<%= sysAbb %>-dropdown-menu slot="dropdown">
    <<%= sysAbb %>-dropdown-item>Action 1</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 2</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 3</<%= sysAbb %>-dropdown-item>
    <<%= sysAbb %>-dropdown-item>Action 4</<%= sysAbb %>-dropdown-item>
  </<%= sysAbb %>-dropdown-menu>
</<%= sysAbb %>-dropdown>
```
:::


### Dropdown Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type          | menu button type, refer to `Button` Component, only works when `split-button` is true  | string  |  —   |    —     |
| size          | menu size, also works on the split button  | string  | medium / small / mini  |    —     |
| split-button | whether a button group is displayed | boolean         |     —       | false   |
| placement    | placement of pop menu | string | top/top-start/top-end/bottom/bottom-start/bottom-end  | bottom-end |
| trigger       | how to trigger     | string  |    hover/click  |  hover |
| hide-on-click | whether to hide menu after clicking menu-item     | boolean          | — | true |
| show-timeout | Delay time before show a dropdown (only works when trigger is `hover`) | number | — | 250 |
| hide-timeout | Delay time before hide a dropdown (only works when trigger is `hover`) | number | — | 150 |

### Dropdown Slots

| Name | Description |
|------|--------|
| — | content of Dropdown. Notice: Must be a valid html dom element (ex. `<span>, <button> etc.`) or `el-component`, to attach the trigger listener  |
| dropdown | content of the Dropdown Menu, usually a `<<%= sysAbb %>-dropdown-menu>` element |

### Dropdown Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| click | if `split-button` is `true`, triggers when left button is clicked | — |
| command | triggers when a dropdown item is clicked | the command dispatched from the dropdown item |
| visible-change | triggers when the dropdown appears/disappears | true when it appears, and false otherwise |

### Dropdown Menu Item Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| command       | a command to be dispatched to Dropdown's `command` callback | string/number/object  |          —             |    —     |
| disabled      | whether the item is disabled  | boolean  |          —             |    false     |
| divided       | whether a divider is displayed  | boolean  |          —             |    false     |
