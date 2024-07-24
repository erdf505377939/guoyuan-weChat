"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: {
    data: {
      sub_title: "",
      title: "",
      score: 1,
      id: "",
      imageUrl: "",
      bannerUrl: "",
      groupId: "",
      intro: ""
    }
  },
  setup(__props) {
    const props = __props;
    const goArticle = () => {
      common_vendor.index.navigateTo({
        url: `/pages/article/index?id=${props.data.id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: props.data.imageUrl,
        b: common_vendor.t(props.data.title),
        c: common_vendor.t(props.data.intro),
        d: common_vendor.o(goArticle)
      };
    };
  }
};
wx.createComponent(_sfc_main);
