## Carousel

Loop a series of images or texts in a limited space

### Basic usage

:::demo Combine `el-carousel` with `el-carousel-item`, and you'll get a carousel. Content of each slide is completely customizable, and you just need to place it inside  `el-carousel-item` tag. By default the carousel switches when mouse hovers over an indicator. Set `trigger` to `click`, and the carousel switches only when an indicator is clicked.
```html
<template>
  <div class="block">
    <span class="demonstration">Switch when indicator is hovered (default)</span>
    <<%= sysAbb %>-carousel height="150px">
      <<%= sysAbb %>-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </<%= sysAbb %>-carousel-item>
    </<%= sysAbb %>-carousel>
  </div>
  <div class="block">
    <span class="demonstration">Switch when indicator is clicked</span>
    <<%= sysAbb %>-carousel trigger="click" height="150px">
      <<%= sysAbb %>-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </<%= sysAbb %>-carousel-item>
    </<%= sysAbb %>-carousel>
  </div>
</template>

<style lang="scss">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### Indicators

Indicators can be displayed outside the carousel

:::demo The `indicator-position` attribute determines where the indicators are located. By default they are inside the carousel, and setting `indicator-position` to `outside` moves them outside; setting `indicator-position` to `none` hides the indicators.
```html
<template>
  <<%= sysAbb %>-carousel indicator-position="outside">
    <<%= sysAbb %>-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </<%= sysAbb %>-carousel-item>
  </<%= sysAbb %>-carousel>
</template>

<style lang="scss">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### Arrows

You can define when arrows are displayed

:::demo The `arrow` attribute determines when arrows are displayed. By default they appear when mouse hovers over the carousel. Setting `arrow` to `always` or `never` shows/hides the arrows permanently.
```html
<template>
  <<%= sysAbb %>-carousel :interval="5000" arrow="always">
    <<%= sysAbb %>-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </<%= sysAbb %>-carousel-item>
  </<%= sysAbb %>-carousel>
</template>

<style lang="scss">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### Card mode

When a page is wide enough but has limited height, you can activate card mode for carousels

:::demo Setting `type` to `card` activates the card mode. Apart from the appearance, the biggest difference between card mode and common mode is that clicking the slides at both sides directly switches the carousel in card mode.
```html
<template>
  <<%= sysAbb %>-carousel :interval="4000" type="card" height="200px">
    <<%= sysAbb %>-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </<%= sysAbb %>-carousel-item>
  </<%= sysAbb %>-carousel>
</template>

<style lang="scss">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### Carousel Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the carousel | string | — | — |
| initial-index | index of the initially active slide (starting from 0) | number | — | 0 |
| trigger | how indicators are triggered | string | hover/click | hover |
| autoplay | whether automatically loop the slides | boolean | — | true |
| interval | interval of the auto loop, in milliseconds | number | — | 3000 |
| indicator-position | position of the indicators | string | outside/none | — |
| arrow | when arrows are shown | string | always/hover/never | hover |
| type | type of the Carousel | string | card | — |
| loop | display the items in loop | boolean | - | true |

### Carousel Events
| Event Name | Description | Parameters |
|---------|---------|---------|
| change | triggers when the active slide switches | index of the new active slide, index of the old active slide |

### Carousel Methods
| Method | Description | Parameters |
|---------- |-------------- | -- |
| setActiveItem | manually switch slide | index of the slide to be switched to, starting from 0; or the `name` of corresponding `el-carousel-item` |
| prev | switch to the previous slide | — |
| next | switch to the next slide | — |

### Carousel-Item Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | name of the item, can be used in `setActiveItem` | string | — | — |
| label | text content for the corresponding indicator | string | — | — |

<style lang="scss">
  .demo-carousel .block {
    padding: 30px;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
    &:last-child {
      border-right: none;
    }
  }

  .demo-carousel .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .demo-carousel .el-carousel__container {
    text-align: center;
  }

  .demo-carousel .el-carousel__item {
    h3 {
      color: #fff;
      font-size: 18px;
      line-height: 300px;
      margin: 0;
    }
    &:nth-child(2n) {
      background-color: #99a9bf;
    }
    &:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }

  .demo-carousel .small h3 {
    font-size: 14px;
    line-height: 150px;
  }

  .demo-carousel .medium h3 {
    font-size: 14px;
    line-height: 200px;
  }
</style>
<script>
  export default {
    mounted() {
      this.$nextTick(() => {
        const demos = document.querySelectorAll('.source');
        demos[0].style.padding = '0';
        demos[0].className += ' small';
        demos[3].className += ' medium';
      });
    }
  }
</script>