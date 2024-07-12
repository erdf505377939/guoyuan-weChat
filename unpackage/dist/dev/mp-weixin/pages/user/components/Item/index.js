"use strict";
const common_vendor = require("../../../../common/vendor.js");
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
    return (_ctx, _cache) => {
      return {
        a: props.data.bgImage
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/snow/Documents/HBuilderProjects/guoyuan-app/pages/user/components/Item/index.vue"]]);
wx.createComponent(Component);
