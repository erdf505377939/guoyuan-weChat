"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (NavBack + TabItem + Item)();
}
const NavBack = () => "../../components/NavBack/index.js";
const Item = () => "./components/Item/index.js";
const TabItem = () => "./components/Tab/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const navBarHeight = common_vendor.ref(0);
    const topHight = common_vendor.ref(0);
    const userInfo = common_vendor.ref({});
    const filterFocus = common_vendor.ref("jsBasic");
    const listData = common_vendor.ref([
      {
        name: "js基础汇总",
        id: "1",
        bgImage: "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/fengmian/fengmian1.jpg",
        like: false,
        collect: false
      },
      {
        name: "css基础汇总",
        id: "2",
        bgImage: "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/fengmian/fengmian2.jpg",
        like: false,
        collect: false
      },
      {
        name: "css小技巧",
        id: "3",
        bgImage: "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/fengmian/fengmian3.jpg",
        like: false,
        collect: false
      },
      {
        name: "js小技巧",
        id: "4",
        bgImage: "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/fengmian/fengmian4.jpg",
        like: false,
        collect: false
      }
    ]);
    const filterList = common_vendor.ref([
      {
        name: "js基础",
        id: "1",
        value: "jsBasic"
      },
      {
        name: "css基础",
        id: "2",
        value: "cssBasic"
      }
    ]);
    common_vendor.onMounted(() => {
      let app = common_vendor.index.getSystemInfoSync();
      let topHightO = app.statusBarHeight;
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      const navBarHeightO = menuButtonInfo.height + (menuButtonInfo.top - topHight) * 2;
      navBarHeight.value = navBarHeightO;
      topHight.value = topHightO;
    });
    const onChooseAvatar = (e) => {
      const { avatarUrl } = e.detail;
      userInfo.value.avatarUrl = avatarUrl;
    };
    const tabChange = (val) => {
      filterFocus.value = val;
    };
    return (_ctx, _cache) => {
      return {
        a: userInfo.value.avatarUrl || "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/avatar.png",
        b: common_vendor.o(onChooseAvatar),
        c: common_vendor.f(filterList.value, (cmp, k0, i0) => {
          return {
            a: cmp.value,
            b: common_vendor.o(tabChange, cmp.value),
            c: "4a5e5ebe-1-" + i0,
            d: common_vendor.p({
              data: cmp,
              active: filterFocus.value === cmp.value
            })
          };
        }),
        d: common_vendor.f(listData.value, (cmp, k0, i0) => {
          return {
            a: cmp.id,
            b: "4a5e5ebe-2-" + i0,
            c: common_vendor.p({
              data: cmp
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/snow/Documents/HBuilderProjects/guoyuan-app/pages/user/index.vue"]]);
wx.createPage(MiniProgramPage);
