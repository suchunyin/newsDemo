<template>
  <div class="list-wrapper">
    <news-card v-for="item in infoList" :key="item.title" :info="item" :picturePosition="'right'"></news-card>
  </div>
</template>

<script>
import newsCard from "../components/newsCard..vue";
export default {
  components: {
    newsCard
  },
  data() {
    return {
      infoList: [
        {
          title: "全国政协十四届一次会议将于周五16: 30举行新闻发布会1",
          source: "界面新闻",
          time: "51分钟前",
          commentNum: 10,
          pic: require("../assets/logo.png")
        },
        {
          title: "全国政协十四届一次会议将于周五16: 30举行新闻发布会2",
          source: "界面新闻",
          time: "51分钟前",
          commentNum: 10,
          pic: require("../assets/logo.png")
        },
        {
          title: "全国政协十四届一次会议将于周五16: 30举行新闻发布会3",
          source: "界面新闻",
          time: "51分钟前",
          commentNum: 10,
          pic: require("../assets/logo.png")
        },
        {
          title: "全国政协十四届一次会议将于周五16: 30举行新闻发布会4",
          source: "界面新闻",
          time: "51分钟前",
          commentNum: 10,
          pic: require("../assets/logo.png")
        },
        {
          title: "全国政协十四届一次会议将于周五16: 30举行新闻发布会5",
          source: "界面新闻",
          time: "51分钟前",
          commentNum: 10,
          pic: require("../assets/logo.png")
        },
        {
          title: "全国政协十四届一次会议将于周五16: 30举行新闻发布会6",
          source: "界面新闻",
          time: "51分钟前",
          commentNum: 10,
          pic: require("../assets/logo.png")
        },
        {
          title: "全国政协十四届一次会议将于周五16: 30举行新闻发布会7",
          source: "界面新闻",
          time: "51分钟前",
          commentNum: 10,
          pic: require("../assets/logo.png")
        },
        {
          title: "全国政协十四届一次会议将于周五16: 30举行新闻发布会8",
          source: "界面新闻",
          time: "51分钟前",
          commentNum: 10,
          pic: require("../assets/logo.png")
        }
      ]
    };
  }
};
</script>

<style></style>
