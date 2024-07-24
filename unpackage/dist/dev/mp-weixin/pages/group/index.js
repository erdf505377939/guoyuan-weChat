"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
if (!Math) {
  (NavBack + ArticleItem)();
}
const NavBack = () => "../../components/NavBack/index.js";
const ArticleItem = () => "../../components/articleItem/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const navBarHeight = common_vendor.ref(0);
    const topHight = common_vendor.ref(0);
    const queryParams = common_vendor.ref({});
    const articleList = common_vendor.ref([]);
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
      api_index.getArticleList({ id: "1" }).then((e) => {
        const { data } = e;
        if (data.code === 0) {
          articleList.value = data.data || [];
        } else {
          common_vendor.index.showToast({
            title: data.message || "请求列表数据失败！",
            icon: "error",
            duration: 2e3
          });
        }
      }).catch(() => {
        common_vendor.index.showToast({
          title: "请求列表数据失败！",
          icon: "error",
          duration: 2e3
        });
      });
    });
    return (_ctx, _cache) => {
      return {
        a: `${topHight.value}px`,
        b: `${navBarHeight.value}px`,
        c: common_vendor.f(articleList.value, (cmp, k0, i0) => {
          return {
            a: cmp.id,
            b: "bc9e9eda-1-" + i0,
            c: common_vendor.p({
              data: cmp
            })
          };
        }),
        d: `${topHight.value + navBarHeight.value}px`
      };
    };
  }
};
wx.createPage(_sfc_main);
