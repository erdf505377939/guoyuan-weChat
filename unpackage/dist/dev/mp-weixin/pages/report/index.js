"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
if (!Math) {
  (NavBack + Item)();
}
const NavBack = () => "../../components/NavBack/index.js";
const Item = () => "../../components/Item/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const navBarHeight = common_vendor.ref(0);
    const topHight = common_vendor.ref(0);
    common_vendor.ref(100);
    const listData = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      let app = common_vendor.index.getSystemInfoSync();
      let topHightO = app.statusBarHeight;
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      topHight.value = topHightO;
      const navBarHeightO = menuButtonInfo.height + (menuButtonInfo.top - topHightO) * 2;
      navBarHeight.value = navBarHeightO;
      api_index.getThematicList({}).then((res) => {
        const { data } = res;
        listData.value = data;
      }).catch((error) => {
        common_vendor.index.showToast({
          title: "请求列表数据失败！",
          icon: "error",
          duration: 2e3
        });
      });
    });
    const scrollTop = () => {
    };
    const upper = () => {
    };
    const lower = () => {
    };
    const scroll = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(listData.value, (cmp, k0, i0) => {
          return {
            a: cmp.id,
            b: "9e6b4694-1-" + i0,
            c: common_vendor.p({
              data: cmp
            })
          };
        }),
        b: `calc(100% - ${navBarHeight.value || 0}px - ${topHight.value || 0}px)`,
        c: scrollTop,
        d: common_vendor.o(upper),
        e: common_vendor.o(lower),
        f: common_vendor.o(scroll)
      };
    };
  }
};
wx.createPage(_sfc_main);
