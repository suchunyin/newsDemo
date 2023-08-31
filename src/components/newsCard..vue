<template>
  <div class="info-wrapper">
    <div class="pic-container" v-if="picturePosition === 'left'">
      <img :src="info.pic" alt="picture" />
    </div>
    <div class="info-container">
      <div class="title-wrapper" @click="infoClick">
        {{ info.title }}
      </div>
      <div class="foot-wrapper">
        <div class="foot">
          <div class="foot-item source">{{ info.source }}</div>
          <div class="foot-item time">{{ info.time }}</div>
        </div>
        <div class="foot">
          <div class="foot-item share" @click="shareClick">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fenxiang"></use>
            </svg>
            分享
          </div>
          <div
            class="foot-item commentNum"
            v-if="info.commentNum > 0"
            @click="commentClick"
          >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pinglun"></use>
            </svg>
            {{ info.commentNum }}
          </div>
        </div>
      </div>
    </div>
    <div class="pic-container" v-if="picturePosition === 'right'">
      <img :src="info.pic" alt="picture" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    info: {
      type: Object,
      required: true
    },
    picturePosition: {
      type: String,
      required: true,
      default: "right"
    },
    infoClick: {
      type: Function,
      default: function() {}
    },
    shareClick: {
      type: Function,
      default: function() {}
    },
    commentClick: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.info-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 150px;
  border-bottom: 1px solid #e6e6e6;
  padding: 20px 0;

  .info-container {
    height: 100%;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title-wrapper {
      font-size: 24px;
      font-weight: 600;
    }
    .foot-wrapper {
      color: #5e5c5c;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .foot {
        display: flex;
        align-items: center;
 
        .foot-item {
          &.share:hover,
          &.commentNum:hover {
            cursor: pointer;
          }
          & + .foot-item {
            margin-left: 10px;
          }
        }
      }
    }
  }

  .pic-container {
    width: 30%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      background-color: rgb(66, 82, 82);
    }
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
