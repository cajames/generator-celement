<template>
  <div
    class="demo-block"
    :class="[blockClass, { 'hover': hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
    <slot name="source"></slot>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <slot name="highlight"></slot>
    </div>
    <div
      class="demo-block-control"
      ref="control"
      :class="{ 'is-fixed': fixedControl }"
      @click="isExpanded = !isExpanded">
      <transition name="arrow-slide">
        <i :class="[iconClass, { 'hovering': hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
const compoLang = {
  "hide-text": "Hide",
  "show-text": "Expand",
  "button-text": "Try it!"
}

export default {
  data() {
    return {
      hovering: false,
      isExpanded: false,
      fixedControl: false,
      scrollParent: null
    }
  },

  props: {
    default() {
      return {}
    }
  },

  methods: {
    scrollHandler() {
      const {
        top,
        bottom,
        left,
        right
      } = this.$refs.meta.getBoundingClientRect()
      this.fixedControl =
        bottom > document.documentElement.clientHeight &&
        top + 44 <= document.documentElement.clientHeight
      this.$refs.control.style.left = this.fixedControl ? `${left}px` : "0"
      this.$refs.control.style.width = this.fixedControl
        ? `${right - left}px`
        : null
    },

    removeScrollHandler() {
      this.scrollParent &&
        window.removeEventListener("scroll", this.scrollHandler)
    }
  },

  computed: {
    hasFiddle() {
      return false
    },

    lang() {
      return this.$route.path.split("/")[1]
    },

    langConfig() {
      return compoLang
    },

    blockClass() {
      return `demo-${this.lang} demo-${this.$router.currentRoute.path
        .split("/")
        .pop()
        .replace(/\.html$/, "")}`
    },

    iconClass() {
      return this.isExpanded ? "el-icon-caret-top" : "el-icon-caret-bottom"
    },

    controlText() {
      return this.isExpanded
        ? this.langConfig["hide-text"]
        : this.langConfig["show-text"]
    },

    codeArea() {
      return this.$el.getElementsByClassName("meta")[0]
    },

    codeAreaHeight() {
      if (this.$el.getElementsByClassName("description").length > 0) {
        return (
          this.$el.getElementsByClassName("description")[0].clientHeight +
          this.$el.getElementsByClassName("highlight")[0].clientHeight +
          13
        )
      }
      return this.$el.getElementsByClassName("highlight")[0].clientHeight
    }
  },

  watch: {
    isExpanded(val) {
      const self = this
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 21}px` : "0"
      if (!val) {
        this.fixedControl = false
        this.$refs.control.style.left = "0"
        this.$refs.control.style.width = null
        this.removeScrollHandler()
        return
      }
      setTimeout(() => {
        self.scrollParent = document.querySelector(".page > .content")
        self.scrollParent &&
          window.addEventListener("scroll", self.scrollHandler)
        self.scrollHandler()
      }, 200)
    }
  },
  mounted() {
    this.$nextTick(() => {
      let highlight = this.$el.getElementsByClassName("highlight")[0]
      if (this.$el.getElementsByClassName("description").length === 0) {
        highlight.style.width = "100%"
        highlight.borderRight = "none"
      }
    })
  },

  beforeDestroy() {
    this.removeScrollHandler()
  }
}
</script>

<style lang="scss">
.demo-block {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: 0.2s;

  &.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }

  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }

  .demo-button {
    float: right;
  }

  .source {
    padding: 24px;
  }

  .meta {
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
  }

  .description {
    padding: 20px;
    box-sizing: border-box;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;

    p {
      margin: 0;
      line-height: 26px;
    }

    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }

  .highlight {
    pre {
      margin: 10px 10px;
    }

    code.hljs {
      margin: 0;
      border: none;
      max-height: none;
      border-radius: 0;

      &::before {
        content: none;
      }
    }
  }

  .demo-block-control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    z-index: 10;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 868px;
    }

    i {
      font-size: 12px;
      line-height: 44px;
      transition: 0.3s;
      &.hovering {
        transform: translateX(-40px);
      }
    }

    > span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }

    .control-button {
      line-height: 26px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      padding-left: 5px;
      padding-right: 25px;
    }
  }
}
</style>