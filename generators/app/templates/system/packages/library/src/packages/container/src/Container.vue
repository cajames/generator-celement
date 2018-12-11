<template>
  <section class="el-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script lang="js">
  export default {
    name: '<%= capAbb %>Container',

    componentName: 'ElContainer',

    props: {
      direction: String
    },

    computed: {
      isVertical() {
        if (this.direction === 'vertical') {
          return true;
        } else if (this.direction === 'horizontal') {
          return false;
        }
        return this.$slots && this.$slots.default
          ? this.$slots.default.some(vnode => {
            const name = vnode.componentOptions && vnode.componentOptions.Ctor.extendOptions.componentName;
            return name === 'ElHeader' || name === 'ElFooter';
          })
          : false;
      }
    }
  };
</script>
