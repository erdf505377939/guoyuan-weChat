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
      }, isHide.value ? {
        b: common_vendor.o(naviBack)
      } : {});
    };
  }
};
wx.createComponent(_sfc_main);
