"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  NavBack();
}
const NavBack = () => "../../components/NavBack/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const navBarHeight = common_vendor.ref(0);
    const topHight = common_vendor.ref(0);
    common_vendor.onMounted(() => {
      let app = common_vendor.index.getSystemInfoSync();
      let topHightO = app.statusBarHeight;
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      const navBarHeightO = menuButtonInfo.height + (menuButtonInfo.top - topHight) * 2;
      navBarHeight.value = navBarHeightO;
      topHight.value = topHightO;
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/snow/Documents/HBuilderProjects/guoyuan-app/pages/report/index.vue"]]);
wx.createPage(MiniProgramPage);
