"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: {
    data: {
      bgImage: "",
      name: "",
      like: false,
      collect: false
    }
  },
  emits: {},
  setup(__props, { emit: __emit }) {
    const props = __props;
    const goGroupPage = () => {
      const { id } = props.data;
      if (id === "1") {
        common_vendor.index.navigateTo({
          url: `/pages/group/index?id=${id}`
        });
      } else {
        common_vendor.index.showToast({
          title: "敬请期待！",
          duration: 1e3
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: props.data.bgImage,
        b: common_vendor.o(goGroupPage)
      };
    };
  }
};
wx.createComponent(_sfc_main);
