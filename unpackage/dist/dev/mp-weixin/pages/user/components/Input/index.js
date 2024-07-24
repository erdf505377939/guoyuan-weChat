"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: {
    value: "",
    beforeImage: "",
    maxLength: 20,
    placeholder: "",
    password: false
  },
  emits: {
    change: (val) => {
    }
  },
  setup(__props, { emit: __emit }) {
    const props = __props;
    const textShow = common_vendor.ref(props.password ? false : true);
    const focusState = common_vendor.ref(false);
    const emits = __emit;
    const inputText = common_vendor.ref(props.value);
    common_vendor.watch(
      () => props.value,
      (val) => {
        inputText.value = val;
      }
    );
    common_vendor.watch(
      () => inputText.value,
      (val) => {
        emits("change", val);
      }
    );
    const focus = () => {
      focusState.value = true;
    };
    const blur = () => {
      focusState.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.beforeImage,
        b: props.password
      }, props.password ? {
        c: textShow.value ? "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/eye_close_line.svg" : "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/eye_line.svg",
        d: common_vendor.o(() => {
          textShow.value = !textShow.value;
        })
      } : {}, {
        e: props.password ? 1 : "",
        f: !textShow.value,
        g: props.placeholder,
        h: props.maxLength,
        i: common_vendor.o(focus),
        j: common_vendor.o(blur),
        k: inputText.value,
        l: common_vendor.o(($event) => inputText.value = $event.detail.value),
        m: focusState.value ? 1 : ""
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-708a7bd8"]]);
wx.createComponent(Component);
