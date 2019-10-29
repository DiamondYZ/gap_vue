<template>
  <div class="layout-resizable" >
    <div ref="topContainer" class="layout-resizable__top" :style="{height: topH}" v-bar>
      <div>
        <slot name="top"> </slot>
      </div>
    </div>
    <div class="layout-resizable__horizontal-bar" :class="{'layout-resizable--dragging': dragged}" v-dragged.prevent="onDragged">
    </div>
    <div ref="bottomContainer" class="layout-resizable__bottom" :style="{height: bottomH}">
      <slot name="bottom"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'LayoutResizable',
    data () {
      return {
        dragged: false,
        topH: this.topHeight,
        bottomH: this.bottomHeight
      }
    },
    props: {
      topHeight: {
        type: String,
        default: '50%'
      },
      bottomHeight: {
        type: String,
        default: '50%'
      },
      topMinHeight: {
        type: String,
        default: '50px'
      },
      bottomMinHeight: {
        type: String,
        default: '100px'
      }
    },
    computed: {
      bottomMinH () {
        return this.parseHeight(this.bottomMinHeight)
      },
      topMinH () {
        return this.parseHeight(this.topMinHeight)
      }
    },
    methods: {
      parseContainerH () {
        return this.$el.clientHeight
      },
      parseHeight (height) {
        let h
        try {
          h = parseFloat(height, 10)
        } catch (e) {
          h = 0
        }
        if (height.endsWith('%')) {
          h = this.parseContainerH() * h / 100
        }
        return h
      },
      onDragged ({ el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last }) {
        if (first) {
          this.dragged = true
          return
        }
        if (last) {
          this.dragged = false
          return
        }
        let topH = this.$refs.topContainer.offsetHeight
        let containerH = this.parseContainerH()
        if (topH < this.topMinH && deltaY < 0) {
          return
        }
        if ((containerH - topH) < this.bottomMinH && deltaY > 0) {
          return
        }

        let p = (topH + deltaY) / containerH
        this.topH = (p * 100) + '%'
        this.bottomH = (1 - p) * 100 + '%'
      }
    }
  }
</script>

<style>
  .layout-resizable {
    height: 100%;
    position: relative;
  }
  .layout-resizable__horizontal-bar {
    height: 10px;
    width: 100%;
    background-color: #BBBBBB;
    position: relative;
    cursor: row-resize;
  }
  .layout-resizable__top, .layout-resizable__bottom {
    overflow: auto;
  }
/****************** vbar start ******************************/
.vb > .vb-dragger {
    z-index: 5;
    width: 12px;
    right: 0;
}

.vb > .vb-dragger > .vb-dragger-styler {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotate3d(0,0,0,0);
    transform: rotate3d(0,0,0,0);
    -webkit-transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    background-color: rgba(48, 121, 244,.1);
    margin: 5px 5px 5px 0;
    border-radius: 20px;
    height: calc(100% - 10px);
    display: block;
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.3);
}

.vb > .vb-dragger:hover > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.5);
    margin: 0px;
    height: 100%;
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.5);
    margin: 0px;
    height: 100%;
}

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.5);
}
/****************** vbar end ******************************/
/****************** add by LiuYan start for vbar******************************/
.vb > .vb-dragger {
  display: none;
}
.vb > .vb-content:hover + .vb-dragger, .vb > .vb-dragger:hover {
  display: block;
}

.layout-resizable--dragging::before {
  content: "";
  position: absolute;
  height: 100px;
  width: 100%;
  top: 10px;
  background-color: transparent;
  z-index: 10;
}
.layout-resizable--dragging::after {
  content: "";
  position: absolute;
  height: 100px;
  width: 100%;
  bottom: 10px;
  z-index: 10;
  background-color: transparent;
}
/****************** add by LiuYan end  for vbar******************************/
</style>