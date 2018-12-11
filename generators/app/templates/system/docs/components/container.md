<style lang="scss">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  
  #common-layouts + .demo-container {
    .el-header, .el-footer {
      text-align: center;
    }
    
    .el-aside {
      background-color: #D3DCE6;
      text-align: center;
      line-height: 200px;
    }
    
    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
    
    & > .source > .el-container {
      margin-bottom: 40px;
    
      &:nth-child(5) .el-aside,
      &:nth-child(6) .el-aside {
        line-height: 260px;
      }
    
     &:nth-child(7) .el-aside {
       line-height: 320px;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

## Container
Container components for scaffolding basic structure of the page:

`<<%= sysAbb %>-container>`: wrapper container. When nested with a `<<%= sysAbb %>-header>` or `<<%= sysAbb %>-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<<%= sysAbb %>-header>`: container for headers.

`<<%= sysAbb %>-aside>`: container for side sections (usually a side nav).

`<<%= sysAbb %>-main>`: container for main sections.

`<<%= sysAbb %>-footer>`: container for footers.

:::tip
These components use flex for layout, so please make sure your browser supports it. Besides, `<<%= sysAbb %>-container>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<<%= sysAbb %>-container>`.
:::

### Common layouts

:::demo
```html
<<%= sysAbb %>-container>
  <<%= sysAbb %>-header>Header</<%= sysAbb %>-header>
  <<%= sysAbb %>-main>Main</<%= sysAbb %>-main>
</<%= sysAbb %>-container>

<<%= sysAbb %>-container>
  <<%= sysAbb %>-header>Header</<%= sysAbb %>-header>
  <<%= sysAbb %>-main>Main</<%= sysAbb %>-main>
  <<%= sysAbb %>-footer>Footer</<%= sysAbb %>-footer>
</<%= sysAbb %>-container>

<<%= sysAbb %>-container>
  <<%= sysAbb %>-aside width="200px">Aside</<%= sysAbb %>-aside>
  <<%= sysAbb %>-main>Main</<%= sysAbb %>-main>
</<%= sysAbb %>-container>

<<%= sysAbb %>-container>
  <<%= sysAbb %>-header>Header</<%= sysAbb %>-header>
  <<%= sysAbb %>-container>
    <<%= sysAbb %>-aside width="200px">Aside</<%= sysAbb %>-aside>
    <<%= sysAbb %>-main>Main</<%= sysAbb %>-main>
  </<%= sysAbb %>-container>
</<%= sysAbb %>-container>

<<%= sysAbb %>-container>
  <<%= sysAbb %>-header>Header</<%= sysAbb %>-header>
  <<%= sysAbb %>-container>
    <<%= sysAbb %>-aside width="200px">Aside</<%= sysAbb %>-aside>
    <<%= sysAbb %>-container>
      <<%= sysAbb %>-main>Main</<%= sysAbb %>-main>
      <<%= sysAbb %>-footer>Footer</<%= sysAbb %>-footer>
    </<%= sysAbb %>-container>
  </<%= sysAbb %>-container>
</<%= sysAbb %>-container>

<<%= sysAbb %>-container>
  <<%= sysAbb %>-aside width="200px">Aside</<%= sysAbb %>-aside>
  <<%= sysAbb %>-container>
    <<%= sysAbb %>-header>Header</<%= sysAbb %>-header>
    <<%= sysAbb %>-main>Main</<%= sysAbb %>-main>
  </<%= sysAbb %>-container>
</<%= sysAbb %>-container>

<<%= sysAbb %>-container>
  <<%= sysAbb %>-aside width="200px">Aside</<%= sysAbb %>-aside>
  <<%= sysAbb %>-container>
    <<%= sysAbb %>-header>Header</<%= sysAbb %>-header>
    <<%= sysAbb %>-main>Main</<%= sysAbb %>-main>
    <<%= sysAbb %>-footer>Footer</<%= sysAbb %>-footer>
  </<%= sysAbb %>-container>
</<%= sysAbb %>-container>

<style lang="scss">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
```
:::

### Example

:::demo
```html
<<%= sysAbb %>-container style="height: 500px; border: 1px solid #eee">
  <<%= sysAbb %>-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <<%= sysAbb %>-menu :default-openeds="['1', '3']">
      <<%= sysAbb %>-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
        <<%= sysAbb %>-menu-item-group>
          <template slot="title">Group 1</template>
          <<%= sysAbb %>-menu-item index="1-1">Option 1</<%= sysAbb %>-menu-item>
          <<%= sysAbb %>-menu-item index="1-2">Option 2</<%= sysAbb %>-menu-item>
        </<%= sysAbb %>-menu-item-group>
        <<%= sysAbb %>-menu-item-group title="Group 2">
          <<%= sysAbb %>-menu-item index="1-3">Option 3</<%= sysAbb %>-menu-item>
        </<%= sysAbb %>-menu-item-group>
        <<%= sysAbb %>-submenu index="1-4">
          <template slot="title">Option4</template>
          <<%= sysAbb %>-menu-item index="1-4-1">Option 4-1</<%= sysAbb %>-menu-item>
        </<%= sysAbb %>-submenu>
      </<%= sysAbb %>-submenu>
      <<%= sysAbb %>-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
        <<%= sysAbb %>-menu-item-group>
          <template slot="title">Group 1</template>
          <<%= sysAbb %>-menu-item index="2-1">Option 1</<%= sysAbb %>-menu-item>
          <<%= sysAbb %>-menu-item index="2-2">Option 2</<%= sysAbb %>-menu-item>
        </<%= sysAbb %>-menu-item-group>
        <<%= sysAbb %>-menu-item-group title="Group 2">
          <<%= sysAbb %>-menu-item index="2-3">Option 3</<%= sysAbb %>-menu-item>
        </<%= sysAbb %>-menu-item-group>
        <<%= sysAbb %>-submenu index="2-4">
          <template slot="title">Option 4</template>
          <<%= sysAbb %>-menu-item index="2-4-1">Option 4-1</<%= sysAbb %>-menu-item>
        </<%= sysAbb %>-submenu>
      </<%= sysAbb %>-submenu>
      <<%= sysAbb %>-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
        <<%= sysAbb %>-menu-item-group>
          <template slot="title">Group 1</template>
          <<%= sysAbb %>-menu-item index="3-1">Option 1</<%= sysAbb %>-menu-item>
          <<%= sysAbb %>-menu-item index="3-2">Option 2</<%= sysAbb %>-menu-item>
        </<%= sysAbb %>-menu-item-group>
        <<%= sysAbb %>-menu-item-group title="Group 2">
          <<%= sysAbb %>-menu-item index="3-3">Option 3</<%= sysAbb %>-menu-item>
        </<%= sysAbb %>-menu-item-group>
        <<%= sysAbb %>-submenu index="3-4">
          <template slot="title">Option 4</template>
          <<%= sysAbb %>-menu-item index="3-4-1">Option 4-1</<%= sysAbb %>-menu-item>
        </<%= sysAbb %>-submenu>
      </<%= sysAbb %>-submenu>
    </<%= sysAbb %>-menu>
  </<%= sysAbb %>-aside>
  
  <<%= sysAbb %>-container>
    <<%= sysAbb %>-header style="text-align: right; font-size: 12px">
      <<%= sysAbb %>-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <<%= sysAbb %>-dropdown-menu slot="dropdown">
          <<%= sysAbb %>-dropdown-item>View</<%= sysAbb %>-dropdown-item>
          <<%= sysAbb %>-dropdown-item>Add</<%= sysAbb %>-dropdown-item>
          <<%= sysAbb %>-dropdown-item>Delete</<%= sysAbb %>-dropdown-item>
        </<%= sysAbb %>-dropdown-menu>
      </<%= sysAbb %>-dropdown>
      <span>Tom</span>
    </<%= sysAbb %>-header>
    
    <<%= sysAbb %>-main>
      <<%= sysAbb %>-table :data="tableData">
        <<%= sysAbb %>-table-column prop="date" label="Date" width="140">
        </<%= sysAbb %>-table-column>
        <<%= sysAbb %>-table-column prop="name" label="Name" width="120">
        </<%= sysAbb %>-table-column>
        <<%= sysAbb %>-table-column prop="address" label="Address">
        </<%= sysAbb %>-table-column>
      </<%= sysAbb %>-table>
    </<%= sysAbb %>-main>
  </<%= sysAbb %>-container>
</<%= sysAbb %>-container>

<style lang="scss">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | layout direction for child elements | string | horizontal / vertical | vertical when nested with `el-header` or `el-footer`; horizontal otherwise |

### Header Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the header | string | — | 60px |

### Aside Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | width of the side section | string | — | 300px |

### Footer Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the footer | string | — | 60px |