<script>
  module.exports = {
    data() {
      return {
        radio: '1',
        radio1: 'selected and disabled',
        radio2: 3,
        radio3: 'New York',
        radio4: 'New York',
        radio5: 'New York',
        radio6: 'New York',
        radio7: '1',
        radio8: '1',
        radio9: '1',
        radio10: '1'
      };
    }
  };
</script>

## Radio

Single selection among multiple options.

### Basic usage

Radio should not have too many options. Otherwise, use the Select component instead.

:::demo Creating a radio component is easy, you just need to bind a variable to Radio's `v-model`. It equals to the value of `label` of the chosen radio. The type of `label` is `String`, `Number` or `Boolean`.
```html
<template>
  <sm-radio v-model="radio" label="1">Option A</sm-radio>
  <sm-radio v-model="radio" label="2">Option B</sm-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### Disabled

`disabled` attribute is used to disable the radio.

:::demo You just need to add the `disabled` attribute.
```html
<template>
  <sm-radio disabled v-model="radio1" label="disabled">Option A</sm-radio>
  <sm-radio disabled v-model="radio1" label="selected and disabled">Option B</sm-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'selected and disabled'
      };
    }
  }
</script>
```
:::

### Radio button group

Suitable for choosing from some mutually exclusive options.

:::demo Combine `el-radio-group` with `el-radio` to display a radio group. Bind a variable with `v-model` of `el-radio-group` element and set label value in `el-radio`. It also provides `change` event with the current value as its parameter.

```html
<sm-radio-group v-model="radio2">
  <sm-radio :label="3">Option A</sm-radio>
  <sm-radio :label="6">Option B</sm-radio>
  <sm-radio :label="9">Option C</sm-radio>
</sm-radio-group>

<script>
  export default {
    data () {
      return {
        radio2: 3
      };
    }
  }
</script>
```
:::

### Button style

Radio with button styles.

:::demo You just need to change `el-radio` element into `el-radio-button` element. We also provide `size` attribute.
```html
<template>
  <div>
    <sm-radio-group v-model="radio3">
      <sm-radio-button label="New York"></sm-radio-button>
      <sm-radio-button label="Washington"></sm-radio-button>
      <sm-radio-button label="Los Angeles"></sm-radio-button>
      <sm-radio-button label="Chicago"></sm-radio-button>
    </sm-radio-group>
  </div>
  <div style="margin-top: 20px">
    <sm-radio-group v-model="radio4" size="medium">
      <sm-radio-button label="New York" ></sm-radio-button>
      <sm-radio-button label="Washington"></sm-radio-button>
      <sm-radio-button label="Los Angeles"></sm-radio-button>
      <sm-radio-button label="Chicago"></sm-radio-button>
    </sm-radio-group>
  </div>
  <div style="margin-top: 20px">
    <sm-radio-group v-model="radio5" size="small">
      <sm-radio-button label="New York"></sm-radio-button>
      <sm-radio-button label="Washington" disabled ></sm-radio-button>
      <sm-radio-button label="Los Angeles"></sm-radio-button>
      <sm-radio-button label="Chicago"></sm-radio-button>
    </sm-radio-group>
  </div>
  <div style="margin-top: 20px">
    <sm-radio-group v-model="radio6" disabled size="mini">
      <sm-radio-button label="New York"></sm-radio-button>
      <sm-radio-button label="Washington"></sm-radio-button>
      <sm-radio-button label="Los Angeles"></sm-radio-button>
      <sm-radio-button label="Chicago"></sm-radio-button>
    </sm-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio3: 'New York',
        radio4: 'New York',
        radio5: 'New York',
        radio6: 'New York'
      };
    }
  }
</script>
```
:::

### With borders

:::demo The `border` attribute adds a border to Radios.
```html
<template>
  <div>
    <sm-radio v-model="radio7" label="1" border>Option A</sm-radio>
    <sm-radio v-model="radio7" label="2" border>Option B</sm-radio>
  </div>
  <div style="margin-top: 20px">
    <sm-radio v-model="radio8" label="1" border size="medium">Option A</sm-radio>
    <sm-radio v-model="radio8" label="2" border size="medium">Option B</sm-radio>
  </div>
  <div style="margin-top: 20px">
    <sm-radio-group v-model="radio9" size="small">
      <sm-radio label="1" border>Option A</sm-radio>
      <sm-radio label="2" border disabled>Option B</sm-radio>
    </sm-radio-group>
  </div>
  <div style="margin-top: 20px">
    <sm-radio-group v-model="radio10" size="mini" disabled>
      <sm-radio label="1" border>Option A</sm-radio>
      <sm-radio label="2" border>Option B</sm-radio>
    </sm-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio7: '1',
        radio8: '1',
        radio9: '1',
        radio10: '1'
      };
    }
  }
</script>
```
:::

### Radio Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
label | the value of Radio | string / number / boolean | — | —
disabled | whether Radio is disabled | boolean | — | false
border  | whether to add a border around Radio  | boolean   | — | false
size  | size of the Radio, only works when `border` is true  | string  | medium / small / mini | —
name | native 'name' attribute | string    |      —         |     —

### Radio Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| change | triggers when the bound value changes | the label value of the chosen radio |

### Radio-group Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
size | the size of radio buttons or bordered radios | string | medium / small / mini | —
disabled  | whether the nesting radios are disabled | boolean   | — | false
text-color | font color when button is active | string   | — | #ffffff   |
fill  | border and background color when button is active | string   | — | #409EFF   |

### Radio-group Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| change | triggers when the bound value changes | the label value of the chosen radio |

### Radio-button Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
label | the value of radio | string / number | — | —
disabled | whether radio is disabled | boolean | — | false
name | native 'name' attribute | string    |      —         |     —
