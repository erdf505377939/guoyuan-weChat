"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (NavBack + _easycom_uni_search_bar + Swipper + TabItem + ArticleItem)();
}
const NavBack = () => "../../components/NavBack/index.js";
const Swipper = () => "./components/Swipper/index.js";
const TabItem = () => "./components/Tab/index.js";
const ArticleItem = () => "../../components/articleItem/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const filterList = common_vendor.ref([
      {
        name: "全部",
        id: "1",
        value: "0"
      },
      {
        name: "js",
        id: "2",
        value: "1"
      }
    ]);
    const filterFocus = common_vendor.ref("0");
    const navBarHeight = common_vendor.ref(0);
    const articleList = common_vendor.ref([]);
    const topHight = common_vendor.ref(0);
    common_vendor.onMounted(() => {
      let app = common_vendor.index.getSystemInfoSync();
      let topHightO = app.statusBarHeight;
      topHight.value = topHightO;
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      const navBarHeightO = menuButtonInfo.height + (menuButtonInfo.top - topHightO) * 2;
      navBarHeight.value = navBarHeightO;
      fetchArticleList("");
    });
    const fetchArticleList = (id) => {
      api_index.getArticleList({ id }).then((e) => {
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
    };
    const search = () => {
    };
    const input = () => {
    };
    const tabChange = (val) => {
      filterFocus.value = val;
      const id = val === "0" ? "" : val;
      fetchArticleList(id);
    };
    const upper = () => {
    };
    const lower = () => {
    };
    const scroll = () => {
    };
    const scrollTop = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: `${topHight.value}px`,
        b: `${navBarHeight.value}px`,
        c: common_vendor.o(search),
        d: common_vendor.o(input),
        e: common_vendor.p({
          radius: "30"
        }),
        f: common_vendor.f(filterList.value, (cmp, k0, i0) => {
          return {
            a: cmp.value,
            b: common_vendor.o(tabChange, cmp.value),
            c: "8b4b51b4-3-" + i0,
            d: common_vendor.p({
              data: cmp,
              active: filterFocus.value === cmp.value
            })
          };
        }),
        g: common_vendor.f(articleList.value, (cmp, k0, i0) => {
          return {
            a: cmp.id,
            b: "8b4b51b4-4-" + i0,
            c: common_vendor.p({
              data: cmp
            })
          };
        }),
        h: `calc(100% - ${navBarHeight.value || 0}px - ${topHight.value || 0}px - 480rpx)`,
        i: scrollTop,
        j: common_vendor.o(upper),
        k: common_vendor.o(lower),
        l: common_vendor.o(scroll),
        m: `calc(100% - ${navBarHeight.value || 0}px - ${topHight.value || 0}px)`
      };
    };
  }
};
wx.createPage(_sfc_main);
