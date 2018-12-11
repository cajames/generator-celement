<script>
  export default {
    data() {
      return {
        tags: [
          { name: 'Tag 1', type: '' },
          { name: 'Tag 2', type: 'success' },
          { name: 'Tag 3', type: 'info' },
          { name: 'Tag 4', type: 'warning' },
          { name: 'Tag 5', type: 'danger' }
        ],
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style lang="scss">
  .demo-box.demo-tag {
    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding: 0;
    }
    .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: bottom;
    }
  }
</style>

## Tag

Used for marking and selection.

### Basic usage

:::demo Use the `type` attribute to define Tag's type. In addition, the `color` attribute can be used to set the background color of the Tag.

```html
<<%= sysAbb %>-tag>Tag One</<%= sysAbb %>-tag>
<<%= sysAbb %>-tag type="success">Tag Two</<%= sysAbb %>-tag>
<<%= sysAbb %>-tag type="info">Tag Three</<%= sysAbb %>-tag>
<<%= sysAbb %>-tag type="warning">Tag Four</<%= sysAbb %>-tag>
<<%= sysAbb %>-tag type="danger">Tag Five</<%= sysAbb %>-tag>
```
:::

### Removable Tag

:::demo `closable` attribute can be used to define a removable tag. It accepts a `Boolean`. By default the removal of Tag has a fading animation. If you don't want to use it, you can set the `disable-transitions` attribute, which accepts a `Boolean`, to `true`. `close` event triggers when Tag is removed.

```html
<<%= sysAbb %>-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</<%= sysAbb %>-tag>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: 'Tag 1', type: '' },
          { name: 'Tag 2', type: 'success' },
          { name: 'Tag 3', type: 'info' },
          { name: 'Tag 4', type: 'warning' },
          { name: 'Tag 5', type: 'danger' }
        ]
      };
    }
  }
</script>
```
:::

### Edit Dynamically

You can use the `close` event to add and remove tag dynamically.

:::demo
```html
<<%= sysAbb %>-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</<%= sysAbb %>-tag>
<<%= sysAbb %>-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="mini"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</<%= sysAbb %>-input>
<<%= sysAbb %>-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</<%= sysAbb %>-button>

<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>
```
:::

### Sizes

Besides default size, Tag component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<<%= sysAbb %>-tag>Default</<%= sysAbb %>-tag>
<<%= sysAbb %>-tag size="medium">Medium</<%= sysAbb %>-tag>
<<%= sysAbb %>-tag size="small">Small</<%= sysAbb %>-tag>
<<%= sysAbb %>-tag size="mini">Mini</<%= sysAbb %>-tag>
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | theme | string | success/info/warning/danger | — |
| closable | whether Tag can be removed | boolean | — | false |
| disable-transitions | whether to disable animations | boolean | — | false |
| hit | whether Tag has a highlighted border | boolean | — | false |
| color | background color of the Tag | string | — | — |
| size | tag size | string | medium / small / mini | — |


### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| close | triggers when Tag is removed | — |