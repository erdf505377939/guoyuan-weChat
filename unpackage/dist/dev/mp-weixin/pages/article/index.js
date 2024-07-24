"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
const utils_common = require("../../utils/common.js");
if (!Array) {
  const _easycom_zero_markdown_view2 = common_vendor.resolveComponent("zero-markdown-view");
  _easycom_zero_markdown_view2();
}
const _easycom_zero_markdown_view = () => "../../uni_modules/zero-markdown-view/components/zero-markdown-view/zero-markdown-view.js";
if (!Math) {
  (NavBack + _easycom_zero_markdown_view)();
}
const NavBack = () => "../../components/NavBack/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const navBarHeight = common_vendor.ref(0);
    const topHight = common_vendor.ref(0);
    const queryParams = common_vendor.ref({});
    const articleInfo = common_vendor.ref({});
    common_vendor.onLoad((params) => {
      queryParams.value = params;
    });
    common_vendor.onMounted(() => {
      let app = common_vendor.index.getSystemInfoSync();
      let topHightO = app.statusBarHeight;
      topHight.value = topHightO;
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      const navBarHeightO = menuButtonInfo.height + (menuButtonInfo.top - topHightO) * 2;
      navBarHeight.value = navBarHeightO;
      const { id } = queryParams.value;
      api_index.getArticle({ id }).then((res) => {
        const { data } = res;
        if (data.code === 0) {
          articleInfo.value = data.data || {};
        } else {
          common_vendor.index.showToast({
            title: data.message || "请求失败！",
            icon: "error",
            duration: 2e3
          });
        }
      }).catch(() => {
      });
    });
    return (_ctx, _cache) => {
      return {
        a: articleInfo.value.bgImage,
        b: `${topHight.value}px`,
        c: `${navBarHeight.value}px`,
        d: articleInfo.value.imageUrl,
        e: common_vendor.t(articleInfo.value.title),
        f: common_vendor.t(`${common_vendor.unref(utils_common.getFloatStr)(String(articleInfo.value.score))}分`),
        g: common_vendor.p({
          markdown: articleInfo.value.content || ""
        }),
        h: `${topHight.value + 500 + navBarHeight.value}rpx`
      };
    };
  }
};
wx.createPage(_sfc_main);
