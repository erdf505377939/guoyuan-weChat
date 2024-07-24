"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
if (!Math) {
  (NavBack + TabItem + Item)();
}
const NavBack = () => "../../components/NavBack/index.js";
const Item = () => "../../components/Item/index.js";
const TabItem = () => "./components/Tab/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const navBarHeight = common_vendor.ref(0);
    const topHight = common_vendor.ref(0);
    const userInfo = common_vendor.ref({
      name: "-",
      age: 0,
      phone: "-",
      avatar: "-",
      nickName: "-"
    });
    const filterFocus = common_vendor.ref("0");
    const listData = common_vendor.ref([]);
    const filterList = common_vendor.ref([
      {
        name: "全部",
        id: "0",
        value: "0"
      },
      {
        name: "js基础",
        id: "1",
        value: "1"
      },
      {
        name: "css基础",
        id: "2",
        value: "2"
      }
    ]);
    common_vendor.onMounted(() => {
      let app = common_vendor.index.getSystemInfoSync();
      let topHightO = app.statusBarHeight;
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      topHight.value = topHightO;
      const navBarHeightO = menuButtonInfo.height + (menuButtonInfo.top - topHightO) * 2;
      navBarHeight.value = navBarHeightO;
      fetchThematicList("");
    });
    const fetchThematicList = (id) => {
      api_index.getThematicList({ id }).then((res) => {
        const { data } = res;
        listData.value = data;
      }).catch((error) => {
        common_vendor.index.showToast({
          title: "请求列表数据失败！",
          icon: "error",
          duration: 2e3
        });
      });
    };
    const tabChange = (val) => {
      filterFocus.value = val;
      const id = val === "0" ? "" : val;
      fetchThematicList(id);
    };
    return (_ctx, _cache) => {
      return {
        a: userInfo.value.avatarUrl || "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/avatar.png",
        b: common_vendor.t(userInfo.value.nickName === "-" ? "游客" : userInfo.value.nickName),
        c: common_vendor.t(userInfo.value.phone),
        d: common_vendor.f(filterList.value, (cmp, k0, i0) => {
          return {
            a: cmp.value,
            b: common_vendor.o(tabChange, cmp.value),
            c: "152bdf66-1-" + i0,
            d: common_vendor.p({
              data: cmp,
              active: filterFocus.value === cmp.value
            })
          };
        }),
        e: common_vendor.f(listData.value, (cmp, k0, i0) => {
          return {
            a: cmp.id,
            b: "152bdf66-2-" + i0,
            c: common_vendor.p({
              data: cmp
            })
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
