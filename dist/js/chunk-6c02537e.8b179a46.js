(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c02537e"],{"666d":function(t,a,s){},"852d":function(t,a,s){"use strict";var e=s("666d"),r=s.n(e);r.a},"935e":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 col-md-offset-4 floating-box"},[s("div",{staticClass:"panel panel-default"},[t._m(0),s("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[s("div",{staticClass:"form-group"},[s("el-input",{attrs:{placeholder:"请输入用户名","prefix-icon":"el-icon-user-solid"},on:{blur:t.checkUsername},model:{value:t.username,callback:function(a){t.username="string"===typeof a?a.trim():a},expression:"username"}})],1),s("div",{staticClass:"form-group"},[s("el-input",{attrs:{id:"password",type:"password",placeholder:"请填写密码","prefix-icon":"el-icon-warning"},on:{blur:t.checkPassword},model:{value:t.password,callback:function(a){t.password="string"===typeof a?a.trim():a},expression:"password"}})],1),s("div",{staticClass:"form-group"},[s("el-input",{attrs:{type:"password",placeholder:"请填写确认密码","prefix-icon":"el-icon-success"},on:{blur:t.confirmPass},model:{value:t.cpassword,callback:function(a){t.cpassword="string"===typeof a?a.trim():a},expression:"cpassword"}})],1),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.captcha,expression:"captcha",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"图片验证码"},expression:"{ title: '图片验证码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写验证码"},domProps:{value:t.captcha},on:{input:function(a){a.target.composing||(t.captcha=a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}})]),s("div",{staticClass:"thumbnail",attrs:{title:"点击图片重新获取验证码"},on:{click:t.getCaptcha}},[s("div",{staticClass:"captcha vcenter",domProps:{innerHTML:t._s(t.captchaTpl)}})]),s("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"},on:{click:t.register}},[s("i",{staticClass:"fa fa-btn fa-sign-in"}),t._v(" 注册\n        ")])])])])])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"panel-heading"},[s("h3",{staticClass:"panel-title"},[t._v("请注册")])])}],c=s("8d85"),i=(s("ac6a"),s("6b75"));function n(t){if(Array.isArray(t))return Object(i["a"])(t)}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var l=s("06c5");function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t){return n(t)||o(t)||Object(l["a"])(t)||p()}var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890",s="",e=[];try{e=h(Array(t)).map((function(){return a[Math.floor(Math.random()*a.length)]}))}catch(r){}return e.forEach((function(t){s+='<span class="flex1 hcenter">'.concat(t,"</span>")})),e=e.join(""),{tpl:s,captcha:e}},d=(s("e8ec"),{name:"Register",data:function(){return{captchaTpl:"",localCaptcha:"",username:"",password:"",cpassword:"",captcha:"",checkuser:!1,checkpass:!1,checkcpass:!1}},created:function(){this.getCaptcha()},methods:{checkUsername:function(){console.log(this);var t=/^[a-zA-Z]+\w*\s?\w*$/;t.test(this.username)?this.checkuser=!0:(this.$message.error("用户名要求以字母开头的单词字符！"),this.checkuser=!1)},checkPassword:function(){var t=/^\w{6,16}$/;t.test(this.password)?this.checkpass=!0:(this.$message.error("密码要求 6 ~ 16 个单词字符！"),this.checkpass=!1)},confirmPass:function(){this.password!=this.cpassword?(this.$message.error("密码不匹配！"),this.checkcpass=!1):this.checkcpass=!0},getCaptcha:function(){var t=u(6),a=t.tpl,s=t.captcha;this.captchaTpl=a,this.localCaptcha=s},register:function(t){var a=this;this.$nextTick((function(){var s="submit"===t.target.type?t.target:t.target.parentElement;s.canSubmit&&a.submit()}))},submit:function(){var t=this;if(this.captcha.toUpperCase()!==this.localCaptcha)this.$message.error("验证码不正确"),this.getCaptcha();else if(this.checkuser)if(this.checkpass)if(this.checkcpass){var a={username:this.username,password:this.password,avatar:"https://api.adorable.io/avatars/200/".concat(this.username,".png")};Object(c["f"])(a.username,a.password,a.avatar).then((function(a){Object(c["k"])(t.username).then((function(a){console.log(a.data);var s={id:a.data[0],username:a.data[1],avatar:a.data[2],is_admin:a.data[3]};t.login(s)})).catch((function(t){console.log(t)}))})).catch((function(a){t.$message.error("该用户已存在")}))}else this.$message.error("密码不匹配!");else this.$message.error("密码要求 6 ~ 16 个单词字符！");else this.$message.error("用户名要求以字母开头的单词字符")},login:function(t){this.$store.dispatch("login",t),this.$message({message:"注册成功",type:"success"})}}}),m=d,f=(s("852d"),s("2877")),v=Object(f["a"])(m,e,r,!1,null,"c351f344",null);a["default"]=v.exports}}]);
//# sourceMappingURL=chunk-6c02537e.8b179a46.js.map