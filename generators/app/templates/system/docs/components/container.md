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

`<sm-container>`: wrapper container. When nested with a `<sm-header>` or `<sm-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<sm-header>`: container for headers.

`<sm-aside>`: container for side sections (usually a side nav).

`<sm-main>`: container for main sections.

`<sm-footer>`: container for footers.

:::tip
These components use flex for layout, so please make sure your browser supports it. Besides, `<sm-container>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<sm-container>`.
:::

### Common layouts

:::demo
```html
<sm-container>
  <sm-header>Header</sm-header>
  <sm-main>Main</sm-main>
</sm-container>

<sm-container>
  <sm-header>Header</sm-header>
  <sm-main>Main</sm-main>
  <sm-footer>Footer</sm-footer>
</sm-container>

<sm-container>
  <sm-aside width="200px">Aside</sm-aside>
  <sm-main>Main</sm-main>
</sm-container>

<sm-container>
  <sm-header>Header</sm-header>
  <sm-container>
    <sm-aside width="200px">Aside</sm-aside>
    <sm-main>Main</sm-main>
  </sm-container>
</sm-container>

<sm-container>
  <sm-header>Header</sm-header>
  <sm-container>
    <sm-aside width="200px">Aside</sm-aside>
    <sm-container>
      <sm-main>Main</sm-main>
      <sm-footer>Footer</sm-footer>
    </sm-container>
  </sm-container>
</sm-container>

<sm-container>
  <sm-aside width="200px">Aside</sm-aside>
  <sm-container>
    <sm-header>Header</sm-header>
    <sm-main>Main</sm-main>
  </sm-container>
</sm-container>

<sm-container>
  <sm-aside width="200px">Aside</sm-aside>
  <sm-container>
    <sm-header>Header</sm-header>
    <sm-main>Main</sm-main>
    <sm-footer>Footer</sm-footer>
  </sm-container>
</sm-container>

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
<sm-container style="height: 500px; border: 1px solid #eee">
  <sm-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <sm-menu :default-openeds="['1', '3']">
      <sm-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
        <sm-menu-item-group>
          <template slot="title">Group 1</template>
          <sm-menu-item index="1-1">Option 1</sm-menu-item>
          <sm-menu-item index="1-2">Option 2</sm-menu-item>
        </sm-menu-item-group>
        <sm-menu-item-group title="Group 2">
          <sm-menu-item index="1-3">Option 3</sm-menu-item>
        </sm-menu-item-group>
        <sm-submenu index="1-4">
          <template slot="title">Option4</template>
          <sm-menu-item index="1-4-1">Option 4-1</sm-menu-item>
        </sm-submenu>
      </sm-submenu>
      <sm-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
        <sm-menu-item-group>
          <template slot="title">Group 1</template>
          <sm-menu-item index="2-1">Option 1</sm-menu-item>
          <sm-menu-item index="2-2">Option 2</sm-menu-item>
        </sm-menu-item-group>
        <sm-menu-item-group title="Group 2">
          <sm-menu-item index="2-3">Option 3</sm-menu-item>
        </sm-menu-item-group>
        <sm-submenu index="2-4">
          <template slot="title">Option 4</template>
          <sm-menu-item index="2-4-1">Option 4-1</sm-menu-item>
        </sm-submenu>
      </sm-submenu>
      <sm-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
        <sm-menu-item-group>
          <template slot="title">Group 1</template>
          <sm-menu-item index="3-1">Option 1</sm-menu-item>
          <sm-menu-item index="3-2">Option 2</sm-menu-item>
        </sm-menu-item-group>
        <sm-menu-item-group title="Group 2">
          <sm-menu-item index="3-3">Option 3</sm-menu-item>
        </sm-menu-item-group>
        <sm-submenu index="3-4">
          <template slot="title">Option 4</template>
          <sm-menu-item index="3-4-1">Option 4-1</sm-menu-item>
        </sm-submenu>
      </sm-submenu>
    </sm-menu>
  </sm-aside>
  
  <sm-container>
    <sm-header style="text-align: right; font-size: 12px">
      <sm-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <sm-dropdown-menu slot="dropdown">
          <sm-dropdown-item>View</sm-dropdown-item>
          <sm-dropdown-item>Add</sm-dropdown-item>
          <sm-dropdown-item>Delete</sm-dropdown-item>
        </sm-dropdown-menu>
      </sm-dropdown>
      <span>Tom</span>
    </sm-header>
    
    <sm-main>
      <sm-table :data="tableData">
        <sm-table-column prop="date" label="Date" width="140">
        </sm-table-column>
        <sm-table-column prop="name" label="Name" width="120">
        </sm-table-column>
        <sm-table-column prop="address" label="Address">
        </sm-table-column>
      </sm-table>
    </sm-main>
  </sm-container>
</sm-container>

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