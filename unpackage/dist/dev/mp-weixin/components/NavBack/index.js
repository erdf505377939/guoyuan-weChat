"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const isHide = common_vendor.ref(false);
    const naviBack = () => {
      common_vendor.index.navigateBack();
    };
    common_vendor.onMounted(() => {
      let pageList = getCurrentPages();
      if (pageList.length >= 2) {
        isHide.value = true;
      } else {
        isHide.value = false;
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isHide.value
      }, isHide.value ? {} : {}, {
        b: common_vendor.o(naviBack)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/snow/Documents/HBuilderProjects/guoyuan-app/components/NavBack/index.vue"]]);
wx.createComponent(Component);
