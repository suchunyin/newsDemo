<template>
  <div class="header-wrapper">
    <div class="logo-wrapper">
      <img src="../../../assets/logo.png" alt="logo" />
    </div>
    <div class="menu-wrapper">
      <div class="menu-list-wrapper">
        <el-menu mode="horizontal" router>
          <el-menu-item
            v-for="item in menulist"
            :key="item.path"
            :index="item.path"
            >{{ item.label }}</el-menu-item
          >
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menulist: [
        { label: "要闻", path: "/news" },
        { label: "北京", path: "/beijing" },
        { label: "财经", path: "/finance" },
        { label: "科技", path: "/tech" },
        { label: "娱乐", path: "/ent" },
        { label: "体育", path: "/sports" },
        { label: "NBA", path: "/NBA" },
        { label: "国际", path: "/world" },
        { label: "军事", path: "/mli" },
        { label: "时尚", path: "/fashion" },
        { label: "游戏", path: "/game" },
        { label: "CBA", path: "/CBA" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: solid 1px #e6e6e6;

  .logo-wrapper {
    img {
      width: 122px;
      height: 33px;
    }
  }
  .menu-wrapper {
    .menu-list-wrapper {
      font-weight: 400;

      .el-dropdown-menu__item,
      .el-menu-item {
        font-size: 18px;
        padding: 0 20px;
        cursor: pointer;
        color: #333;
        font: 400 Microsoft Yahei, Avenir, Segoe UI, Hiragino Sans GB, STHeiti,
          Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
      }
      .el-menu.el-menu--horizontal {
        border-bottom: solid 0px #e6e6e6;
      }
    }
  }
}
</style>
