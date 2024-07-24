"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_index = require("../../../api/index.js");
if (!Math) {
  (NavBack + Logininput)();
}
const NavBack = () => "../../../components/NavBack/index.js";
const Logininput = () => "../components/Input/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const navBarHeight = common_vendor.ref(0);
    const topHight = common_vendor.ref(0);
    const loginPageState = common_vendor.ref("signIn");
    const formData = common_vendor.reactive({
      userName: "",
      password: "",
      name: "",
      age: 0,
      phone: "",
      avatar: "",
      nickName: "",
      email: ""
    });
    common_vendor.onMounted(() => {
      let app = common_vendor.index.getSystemInfoSync();
      let topHightO = app.statusBarHeight;
      topHight.value = topHightO;
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      const navBarHeightO = menuButtonInfo.height + (menuButtonInfo.top - topHightO) * 2;
      navBarHeight.value = navBarHeightO;
    });
    const jumpPage = (path) => {
      common_vendor.index.navigateTo({
        url: path
      });
    };
    const goRegister = () => {
      formData.userName = "";
      formData.password = "";
      formData.name = "";
      formData.age = 0;
      formData.phone = "";
      formData.avatar = "";
      formData.nickName = "";
      formData.email = "";
      loginPageState.value = "register";
    };
    const signIn = () => {
      const { userName, password } = formData;
      if (!userName || !password) {
        common_vendor.index.showToast({
          title: "账号或者密码不能为空，请完善！",
          icon: "none",
          duration: 1e3
        });
      } else {
        api_index.userSignIn({
          phone: userName,
          password
        }).then((res) => {
          const { data } = res;
          if (data.code === 0)
            ;
          else {
            common_vendor.index.showToast({
              title: data.message || "登录失败，请重试！",
              icon: "none",
              duration: 1e3
            });
          }
        }).catch(() => {
          common_vendor.index.showToast({
            title: "登录失败，请重试！",
            icon: "none",
            duration: 1e3
          });
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(`${loginPageState.value === "signIn" ? "登录" : "注册"}`),
        b: `${topHight.value}px`,
        c: `${navBarHeight.value}px`,
        d: loginPageState.value === "signIn"
      }, loginPageState.value === "signIn" ? {
        e: common_vendor.o((val) => {
          formData.userName = val;
        }),
        f: common_vendor.p({
          value: formData.userName,
          ["before-image"]: "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/phone.svg",
          ["max-length"]: 20,
          placeholder: "请输入手机号",
          password: false
        }),
        g: common_vendor.o((val) => {
          formData.password = val;
        }),
        h: common_vendor.p({
          value: formData.password,
          ["before-image"]: "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/password.svg",
          ["max-length"]: 50,
          placeholder: "请输入密码",
          password: true
        }),
        i: common_vendor.o(goRegister),
        j: common_vendor.o(signIn)
      } : {}, {
        k: loginPageState.value === "register"
      }, loginPageState.value === "register" ? {
        l: common_vendor.o((val) => {
          formData.name = val;
        }),
        m: common_vendor.p({
          value: formData.name,
          ["before-image"]: "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/phone.svg",
          ["max-length"]: 10,
          placeholder: "请输入姓名",
          password: false
        }),
        n: common_vendor.o((val) => {
          formData.age = val;
        }),
        o: common_vendor.p({
          value: formData.age,
          ["before-image"]: "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/password.svg",
          ["max-length"]: 10,
          placeholder: "请输入年龄",
          password: false
        }),
        p: common_vendor.o((val) => {
          formData.phone = val;
        }),
        q: common_vendor.p({
          value: formData.phone,
          ["before-image"]: "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/phone.svg",
          ["max-length"]: 10,
          placeholder: "请输入手机号",
          password: false
        }),
        r: common_vendor.o((val) => {
          formData.avatar = val;
        }),
        s: common_vendor.p({
          value: formData.avatar,
          ["before-image"]: "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/password.svg",
          ["max-length"]: 10,
          placeholder: "请输入头像",
          password: false
        }),
        t: common_vendor.o((val) => {
          formData.nickName = val;
        }),
        v: common_vendor.p({
          value: formData.nickName,
          ["before-image"]: "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/phone.svg",
          ["max-length"]: 10,
          placeholder: "请输入昵称",
          password: false
        }),
        w: common_vendor.o((val) => {
          formData.email = val;
        }),
        x: common_vendor.p({
          value: formData.email,
          ["before-image"]: "https://fe-web-guoyuan.oss-cn-beijing.aliyuncs.com/image/wechat/icon/password.svg",
          ["max-length"]: 10,
          placeholder: "请输入邮箱",
          password: false
        }),
        y: common_vendor.o(signIn)
      } : {}, {
        z: common_vendor.o(() => {
          jumpPage("/pages/static_page/user_agreement/index");
        }),
        A: common_vendor.o(() => {
          jumpPage("/pages/static_page/privacy_agreement/index");
        }),
        B: loginPageState.value === "register" ? 1 : "",
        C: `calc(${topHight.value + navBarHeight.value}px + 400rpx)`
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b3fa26a2"]]);
wx.createPage(MiniProgramPage);
