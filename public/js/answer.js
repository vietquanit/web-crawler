(self["webpackChunk"] = self["webpackChunk"] || []).push([["answer"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LogoutMenu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LogoutMenu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Logout',
  data: function data() {
    return {
      username: ''
    };
  },
  created: function created() {
    if (localStorage.hasOwnProperty("isLogged") && localStorage.getItem('isLogged') == 'True') {
      this.username = localStorage.getItem('username');
    } // if (!localStorage.hasOwnProperty("isLogged")) {
    //     if (this.$route.path !== '/login') {
    //         this.$router.push('/login')
    //     }
    // } else {
    //     if (localStorage.getItem('isLogged') !== 'True') {
    //         if (this.$route.path !== '/login') {
    //             this.$router.push('/login')
    //         }
    //     } else {
    //         // console.log('has loged')
    //         this.$router.push({name: 'user'})
    //     }
    // }

  },
  methods: {
    logout: function logout() {
      console.log("out");
      localStorage.clear();
      this.$router.push({
        name: 'login'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/Answer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/Answer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LogoutMenu_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../LogoutMenu.vue */ "./resources/js/components/LogoutMenu.vue");
/* harmony import */ var _ContentAnswer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentAnswer.vue */ "./resources/js/components/Users/ContentAnswer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'answer',
  components: {
    'logout-menu-vue': _LogoutMenu_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    'content-answer': _ContentAnswer_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      data: [],
      yearArr: [],
      yearSelected: '',
      id: localStorage.getItem('id'),
      monthSelected: ''
    };
  },
  created: function created() {
    this.getListForms(this.id);
  },
  watch: {
    yearSelected: function yearSelected(newSelected, oldSelected) {
      if (newSelected == "") {} else {
        if (newSelected != oldSelected) {
          this.getListForms(this.id);
        }
      }
    },
    monthSelected: function monthSelected(newSelected, oldSelected) {
      if (newSelected == "") {} else {
        if (newSelected != oldSelected) {
          this.getListForms(this.id);
        }
      }
    }
  },
  methods: {
    getListForms: function getListForms(id) {
      this.data = [];
      var self = this;
      self.axios.get('http://localhost:8000/api/getAssignById/' + id).then(function (response) {
        response.data.forEach(function (element) {
          if (self.yearSelected == '') {
            if (self.monthSelected == '') {
              self.data.push(element);
            } else {
              if (self.monthSelected == element.month_assign) {
                self.data.push(element);
              }
            }
          } else {
            if (self.monthSelected == '') {
              if (self.yearSelected == element.year_assign) {
                self.data.push(element);
              }
            } else {
              if (self.monthSelected == element.month_assign && self.yearSelected == element.year_assign) {
                self.data.push(element);
              }
            }
          }
        });
        self.getListYear(response.data);
      });
    },
    getListYear: function getListYear(data) {
      var _this = this;

      data.forEach(function (element) {
        if (!_this.yearArr.includes(element.year_assign)) {
          _this.yearArr.push(element.year_assign);
        }
      });
    },
    deleteFilter: function deleteFilter() {
      this.monthSelected = '';
      this.yearSelected = '';
      this.getListForms(this.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/ContentAnswer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/ContentAnswer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'contentAnswer',
  props: ["dataContent"],
  watch: {
    dataContent: function dataContent(newVal, oldVal) {
      this.data = newVal;
    }
  },
  data: function data() {
    return {
      data: this.dataContent,
      userId: localStorage.getItem('id')
    };
  },
  methods: {
    formatDate: function formatDate(dateString) {
      var date = new Date(dateString);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LogoutMenu.vue?vue&type=style&index=0&id=c7d36b98&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LogoutMenu.vue?vue&type=style&index=0&id=c7d36b98&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.dropdown[data-v-c7d36b98]{\n    display: \"block\";\n    text-align: right;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/Answer.vue?vue&type=style&index=0&id=a4a7a1a0&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/Answer.vue?vue&type=style&index=0&id=a4a7a1a0&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.list-year button[data-v-a4a7a1a0]{\n    width: 100%;\n    line-height: 40px;\n    font-weight: 700;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LogoutMenu.vue?vue&type=style&index=0&id=c7d36b98&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LogoutMenu.vue?vue&type=style&index=0&id=c7d36b98&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutMenu_vue_vue_type_style_index_0_id_c7d36b98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LogoutMenu.vue?vue&type=style&index=0&id=c7d36b98&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LogoutMenu.vue?vue&type=style&index=0&id=c7d36b98&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutMenu_vue_vue_type_style_index_0_id_c7d36b98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutMenu_vue_vue_type_style_index_0_id_c7d36b98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/Answer.vue?vue&type=style&index=0&id=a4a7a1a0&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/Answer.vue?vue&type=style&index=0&id=a4a7a1a0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_a4a7a1a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Answer.vue?vue&type=style&index=0&id=a4a7a1a0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/Answer.vue?vue&type=style&index=0&id=a4a7a1a0&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_a4a7a1a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_a4a7a1a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/LogoutMenu.vue":
/*!************************************************!*\
  !*** ./resources/js/components/LogoutMenu.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LogoutMenu_vue_vue_type_template_id_c7d36b98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogoutMenu.vue?vue&type=template&id=c7d36b98&scoped=true& */ "./resources/js/components/LogoutMenu.vue?vue&type=template&id=c7d36b98&scoped=true&");
/* harmony import */ var _LogoutMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogoutMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/LogoutMenu.vue?vue&type=script&lang=js&");
/* harmony import */ var _LogoutMenu_vue_vue_type_style_index_0_id_c7d36b98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogoutMenu.vue?vue&type=style&index=0&id=c7d36b98&scoped=true&lang=css& */ "./resources/js/components/LogoutMenu.vue?vue&type=style&index=0&id=c7d36b98&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _LogoutMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _LogoutMenu_vue_vue_type_template_id_c7d36b98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _LogoutMenu_vue_vue_type_template_id_c7d36b98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c7d36b98",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LogoutMenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Users/Answer.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Users/Answer.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Answer_vue_vue_type_template_id_a4a7a1a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Answer.vue?vue&type=template&id=a4a7a1a0&scoped=true& */ "./resources/js/components/Users/Answer.vue?vue&type=template&id=a4a7a1a0&scoped=true&");
/* harmony import */ var _Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Answer.vue?vue&type=script&lang=js& */ "./resources/js/components/Users/Answer.vue?vue&type=script&lang=js&");
/* harmony import */ var _Answer_vue_vue_type_style_index_0_id_a4a7a1a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Answer.vue?vue&type=style&index=0&id=a4a7a1a0&scoped=true&lang=css& */ "./resources/js/components/Users/Answer.vue?vue&type=style&index=0&id=a4a7a1a0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Answer_vue_vue_type_template_id_a4a7a1a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Answer_vue_vue_type_template_id_a4a7a1a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a4a7a1a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Users/Answer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Users/ContentAnswer.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Users/ContentAnswer.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContentAnswer_vue_vue_type_template_id_95f008d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentAnswer.vue?vue&type=template&id=95f008d6& */ "./resources/js/components/Users/ContentAnswer.vue?vue&type=template&id=95f008d6&");
/* harmony import */ var _ContentAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentAnswer.vue?vue&type=script&lang=js& */ "./resources/js/components/Users/ContentAnswer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ContentAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ContentAnswer_vue_vue_type_template_id_95f008d6___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContentAnswer_vue_vue_type_template_id_95f008d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Users/ContentAnswer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/LogoutMenu.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/LogoutMenu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LogoutMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LogoutMenu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Users/Answer.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Users/Answer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Answer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/Answer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Users/ContentAnswer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Users/ContentAnswer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContentAnswer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/ContentAnswer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/LogoutMenu.vue?vue&type=style&index=0&id=c7d36b98&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/LogoutMenu.vue?vue&type=style&index=0&id=c7d36b98&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutMenu_vue_vue_type_style_index_0_id_c7d36b98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LogoutMenu.vue?vue&type=style&index=0&id=c7d36b98&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LogoutMenu.vue?vue&type=style&index=0&id=c7d36b98&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Users/Answer.vue?vue&type=style&index=0&id=a4a7a1a0&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Users/Answer.vue?vue&type=style&index=0&id=a4a7a1a0&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_a4a7a1a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Answer.vue?vue&type=style&index=0&id=a4a7a1a0&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/Answer.vue?vue&type=style&index=0&id=a4a7a1a0&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/LogoutMenu.vue?vue&type=template&id=c7d36b98&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/LogoutMenu.vue?vue&type=template&id=c7d36b98&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutMenu_vue_vue_type_template_id_c7d36b98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutMenu_vue_vue_type_template_id_c7d36b98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutMenu_vue_vue_type_template_id_c7d36b98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LogoutMenu.vue?vue&type=template&id=c7d36b98&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LogoutMenu.vue?vue&type=template&id=c7d36b98&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Users/Answer.vue?vue&type=template&id=a4a7a1a0&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Users/Answer.vue?vue&type=template&id=a4a7a1a0&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_template_id_a4a7a1a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_template_id_a4a7a1a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_template_id_a4a7a1a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Answer.vue?vue&type=template&id=a4a7a1a0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/Answer.vue?vue&type=template&id=a4a7a1a0&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Users/ContentAnswer.vue?vue&type=template&id=95f008d6&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Users/ContentAnswer.vue?vue&type=template&id=95f008d6& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentAnswer_vue_vue_type_template_id_95f008d6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentAnswer_vue_vue_type_template_id_95f008d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentAnswer_vue_vue_type_template_id_95f008d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContentAnswer.vue?vue&type=template&id=95f008d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/ContentAnswer.vue?vue&type=template&id=95f008d6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LogoutMenu.vue?vue&type=template&id=c7d36b98&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LogoutMenu.vue?vue&type=template&id=c7d36b98&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "Logout dropdown" }, [
    _c(
      "button",
      {
        staticClass: "btn btn-secondary dropdown-toggle",
        attrs: {
          type: "button",
          id: "dropdownMenuButton",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_vm._v("\n        " + _vm._s(_vm.username) + "\n    ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "dropdown-menu",
        attrs: { "aria-labelledby": "dropdownMenuButton" }
      },
      [
        _c(
          "button",
          { staticClass: "dropdown-item", on: { click: _vm.logout } },
          [_vm._v("Logout")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/Answer.vue?vue&type=template&id=a4a7a1a0&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/Answer.vue?vue&type=template&id=a4a7a1a0&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.yearArr.length > 0
    ? _c("div", { staticClass: "answer row" }, [
        _c("div", { staticClass: "form-group col-md-1" }, [
          _c("label", { staticClass: "col-span-2", attrs: { for: "name" } }),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.yearSelected,
                  expression: "yearSelected"
                }
              ],
              staticClass:
                "col-span-2 border-2 border-green-900 border-opacity-75 rounded p-1",
              attrs: { id: "selectForm", placeholder: "Lọc theo thời gian" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.yearSelected = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }),
              _vm._v(" "),
              _vm._l(_vm.yearArr, function(y) {
                return _c("option", { key: y.id, domProps: { value: y } }, [
                  _vm._v("Năm " + _vm._s(y))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-md-1" }, [
          _c("label", { staticClass: "col-span-2", attrs: { for: "name" } }),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.monthSelected,
                  expression: "monthSelected"
                }
              ],
              staticClass:
                "col-span-2 border-2 border-green-900 border-opacity-75 rounded p-1",
              attrs: { id: "selectForm", placeholder: "Lọc theo thời gian" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.monthSelected = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }),
              _vm._v(" "),
              _vm._l(12, function(m, indexMonth) {
                return _c(
                  "option",
                  { key: indexMonth, domProps: { value: m } },
                  [_vm._v("Tháng " + _vm._s(m))]
                )
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "left-content col-md-1 mt-3" }, [
          _c(
            "button",
            {
              staticClass:
                "antialiased rounded border-2 border-purple-500 mb-2 p-2",
              on: {
                click: function($event) {
                  return _vm.deleteFilter()
                }
              }
            },
            [_vm._v("Clear")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "left-content col-md-9 mt-2" },
          [
            _c("logout-menu-vue"),
            _vm._v(" "),
            _c("content-answer", { attrs: { dataContent: _vm.data } })
          ],
          1
        )
      ])
    : _c(
        "div",
        [
          _c("logout-menu-vue"),
          _vm._v(" "),
          _c("h1", { staticClass: "text-center mt-5 text-2xl" }, [
            _vm._v("Dữ liệu không có")
          ])
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/ContentAnswer.vue?vue&type=template&id=95f008d6&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users/ContentAnswer.vue?vue&type=template&id=95f008d6& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "contentAnswer" }, [
    _c("table", { staticClass: "min-w-full divide-y divide-gray-200 mt-3" }, [
      _vm._m(0),
      _vm._v(" "),
      _vm.data.length == 0
        ? _c("tbody", { staticClass: "bg-white divide-y divide-gray-200" }, [
            _vm._m(1)
          ])
        : _c(
            "tbody",
            { staticClass: "bg-white divide-y divide-gray-200" },
            [
              _vm._l(_vm.data, function(d) {
                return _c(
                  "tr",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: d.check_assigned == 1,
                        expression: "d.check_assigned == 1"
                      }
                    ],
                    key: d.key,
                    staticClass: "bg-green-200"
                  },
                  [
                    _c(
                      "td",
                      { staticClass: "px-2 py-2 whitespace-nowrap" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "text-green-600 mr-3",
                            attrs: {
                              to: {
                                name: "viewDetail",
                                params: { userId: _vm.userId, idForm: d.assid }
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "text-xl text-gray-600 " },
                              [_vm._v(_vm._s(d.name_assign))]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "text-md text-gray-500" },
                              [_vm._v(_vm._s(d.description_assign))]
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "px-2 py-2 whitespace-nowrap" }, [
                      _c("div", { staticClass: "text-sm text-gray-900" }, [
                        _vm._v(
                          _vm._s(d.score_questions_correct_assign) +
                            " / " +
                            _vm._s(d.score_questions_assign)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "px-2 py-2 whitespace-nowrap" }, [
                      _c("div", { staticClass: "text-sm text-gray-900" }, [
                        _vm._v(_vm._s(d.username))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "px-2 py-2 whitespace-nowrap" }, [
                      _c("div", { staticClass: "text-sm text-gray-900" }, [
                        _vm._v(
                          _vm._s(d.year_assign) + " / " + _vm._s(d.month_assign)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "px-2 py-2 whitespace-nowrap" }, [
                      _c("div", { staticClass: "text-sm text-gray-900" }, [
                        _vm._v(_vm._s(_vm.formatDate(d.updated_at)))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "px-2 py-2 whitespace-nowrap" }, [
                      _c("div", { staticClass: "text-sm text-gray-900" }, [
                        _vm._v(_vm._s(_vm.formatDate(d.created_at)))
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass:
                          "px-2 py-2 whitespace-nowrap text-right text-sm font-medium"
                      },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "text-green-600 mr-3",
                            attrs: {
                              to: {
                                name: "viewDetail",
                                params: { userId: _vm.userId, idForm: d.assid }
                              }
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticStyle: {
                                  width: "30px",
                                  height: "30px",
                                  display: "inline"
                                },
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d:
                                      "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  }
                                })
                              ]
                            ),
                            _vm._v("\n              Xem\n            ")
                          ]
                        )
                      ],
                      1
                    )
                  ]
                )
              }),
              _vm._v(" "),
              _vm._l(_vm.data, function(d) {
                return _c(
                  "tr",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: d.check_assigned == 0,
                        expression: "d.check_assigned == 0"
                      }
                    ],
                    key: d.key
                  },
                  [
                    _c("td", { staticClass: "px-2 py-2 whitespace-nowrap" }, [
                      _c("div", { staticClass: "text-sm text-gray-900" }, [
                        _vm._v(_vm._s(d.name_assign))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-sm text-gray-500" }, [
                        _vm._v(_vm._s(d.description_assign))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "px-2 py-2 whitespace-nowrap" }, [
                      _c("div", { staticClass: "text-sm text-gray-900" }, [
                        _vm._v(
                          _vm._s(d.score_questions_correct_assign) +
                            " / " +
                            _vm._s(d.score_questions_assign)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "px-2 py-2 whitespace-nowrap" }, [
                      _c("div", { staticClass: "text-sm text-gray-900" }, [
                        _vm._v(_vm._s(d.username))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "px-2 py-2 whitespace-nowrap" }, [
                      _c("div", { staticClass: "text-sm text-gray-900" }, [
                        _vm._v(
                          _vm._s(d.year_assign) + " / " + _vm._s(d.month_assign)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "px-2 py-2 whitespace-nowrap" }, [
                      _c("div", { staticClass: "text-sm text-gray-900" }, [
                        _vm._v(_vm._s(_vm.formatDate(d.updated_at)))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "px-2 py-2 whitespace-nowrap" }, [
                      _c("div", { staticClass: "text-sm text-gray-900" }, [
                        _vm._v(_vm._s(_vm.formatDate(d.created_at)))
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass:
                          "px-2 py-2 whitespace-nowrap text-right text-sm font-medium"
                      },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "text-green-600 mr-3",
                            attrs: {
                              to: {
                                name: "viewDetail",
                                params: { userId: _vm.userId, idForm: d.assid }
                              }
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticStyle: {
                                  width: "30px",
                                  height: "30px",
                                  display: "inline"
                                },
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d:
                                      "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  }
                                })
                              ]
                            ),
                            _vm._v("\n              Xem\n            ")
                          ]
                        )
                      ],
                      1
                    )
                  ]
                )
              })
            ],
            2
          )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-gray-50" }, [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" }
          },
          [_vm._v("\n            Tiêu đề\n          ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" }
          },
          [_vm._v("\n            Điểm số\n          ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" }
          },
          [_vm._v("\n            Người dùng\n          ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" }
          },
          [_vm._v("\n            Tháng được gán\n          ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" }
          },
          [_vm._v("\n            Thời gian tạo\n          ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" }
          },
          [_vm._v("\n            Lần cập nhật cuối\n          ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "relative px-6 py-3", attrs: { scope: "col" } },
          [
            _c("span", { staticClass: "sr-only" }, [_vm._v("Edit")]),
            _vm._v(" "),
            _c("span", { staticClass: "sr-only" }, [_vm._v("Delete")])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticClass: "not-data", attrs: { colspan: "4" } }, [
        _vm._v("Không có bản ghi nào")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);