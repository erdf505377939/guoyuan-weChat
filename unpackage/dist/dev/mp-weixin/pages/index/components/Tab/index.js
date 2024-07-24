"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: {
    data: {
      name: "",
      value: "",
      id: ""
    },
    active: false
  },
  emits: {},
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const changeTab = () => {
      if (props.active === props.data.value) {
        return;
      }
      emits("tabChange", props.data.value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.data.name),
        b: props.active ? 1 : "",
        c: common_vendor.o(changeTab)
      };
    };
  }
};
wx.createComponent(_sfc_main);
