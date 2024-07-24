"use strict";
const common_vendor = require("../../../../common/vendor.js");
const api_index = require("../../../../api/index.js");
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  _easycom_uni_swiper_dot2();
}
const _easycom_uni_swiper_dot = () => "../../../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
if (!Math) {
  _easycom_uni_swiper_dot();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const info = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      api_index.getActivityList({}).then((e) => {
        const { data } = e;
        if (data.code === 0) {
          info.value = data.data || [];
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
    });
    const swipperInfo = common_vendor.ref({
      current: 0,
      mode: "round"
    });
    const change = (e) => {
      const { target } = e;
      swipperInfo.value.current = target.current || 0;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(info.value, (item, index, i0) => {
          return {
            a: item.bgImage,
            b: index
          };
        }),
        b: common_vendor.o(change),
        c: common_vendor.p({
          info: info.value,
          current: swipperInfo.value.current,
          field: "content",
          mode: swipperInfo.value.mode
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
