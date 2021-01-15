'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var fs = require('fs');
var Vuex = require('vuex');
var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var Vuex__default = /*#__PURE__*/_interopDefaultLegacy(Vuex);

var script = Vue__default['default'].extend({
    name: 'my-component',
    props: ['message'],
    data: function () {
        return {};
    },
    mounted: function () { },
    methods: {},
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  const options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  let hook;

  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      const originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      const existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [
    _c("hr"),
    _vm._v(" "),
    _c("i", [_vm._v(_vm._s(_vm.$store.state.counter))]),
    _vm._v(" "),
    _c("h2", { attrs: { id: "hhh" } }, [_vm._v(_vm._s(_vm.message))])
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = "data-v-5fc351db";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

var script$1 = Vue__default['default'].extend({
    components: { MyComponent: __vue_component__ },
    name: 'App',
    data: function () {
        return {
            testMessage: 'This should be red',
        };
    },
    methods: {
        log: function () {
            console.log('Hello, I am default panel.');
        },
        addition: function () {
            this.$store.commit('increment');
            console.log(this.$store.state.counter);
        },
        subtraction: function () {
            this.$store.commit('decrement');
            console.log(this.$store.state.counter);
        },
    },
});

/* script */
const __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c("h2", [_vm._v(" " + _vm._s(_vm.$store.state.counter))]),
      _vm._v(" "),
      _c("ui-button", { staticClass: "blue", on: { click: _vm.addition } }, [
        _vm._v("+")
      ]),
      _vm._v(" "),
      _c("ui-button", { on: { click: _vm.subtraction } }, [_vm._v("-")]),
      _vm._v(" "),
      _c("ui-button", { on: { click: _vm.log } }, [_vm._v("Say Hello")]),
      _vm._v(" "),
      _c("my-component", { attrs: { message: _vm.testMessage } })
    ],
    1
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = "data-v-c3fc8338";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

var name = "cocos-vue2.x-vuex-rollup-template";

const outputDir = 'dest';

/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * @en Return the absolute path of the current extension
 * @zh 返回当前插件的绝对路径
 */
function getExtensionDir() {
    return path.join(Editor.Project.path, 'extensions', name);
}
/**
 * @en Converts a path relative to source to an absolute path
 * @zh 转化相对于 source 的路径到绝对路径
 */
function getAbsolutePath(relativePath) {
    return path.join(getExtensionDir(), outputDir, relativePath);
}

var xxx = "panels/default/store/XXX.txt";

Vue__default['default'].use(Vuex__default['default']);
var value = Number.parseFloat(fs__default['default'].readFileSync(getAbsolutePath(xxx), 'utf-8'));
/**
 * @en @see https://vuex.vuejs.org/  vuex document
 * @zh @see https://vuex.vuejs.org/zh/  vuex 文档
 */
var store = new Vuex__default['default'].Store({
    state: {
        counter: value,
    },
    mutations: {
        increment: function (state) {
            state.counter++;
        },
        decrement: function (state) {
            state.counter--;
        },
    },
    actions: {},
    getters: {},
});

/**
 * @en Get the CSS exported from all Vue files
 * @zh 获取从所有Vue文件中导出的CSS
 */
function getCSSFromVue() {
    var cssStr;
    try {
        cssStr = fs__default['default'].readFileSync(getAbsolutePath('panels/css/all.css'), 'utf-8');
    }
    catch (error) {
        cssStr = '';
    }
    return cssStr;
}

Vue__default['default'].config.productionTip = false;
Vue__default['default'].config.devtools = false;
/**
 * @en Listening to panel events
 * @zh 监听面板事件
 */
var linsteners = {
    /**
     * @en Hooks triggered when the panel is displayed
     * @zh 面板显示的时候触发的钩子
     */
    show: function () { },
    /**
     * @en Hooks triggered when the panel is hidden
     * @zh 面板隐藏的时候触发的钩子
     */
    hide: function () { },
};
/**
 * @en Template of the panel
 * @zh 面板的内容
 */
var template = '<div id=app></div>';
/**
 * @en Style of the panel
 * @zh 面板上的样式
 */
var style = getCSSFromVue();
/**
 * @en Selector of the panel
 * @zh 快捷选择器
 */
var $ = { app: '#app' };
/**
 * @en Hooks triggered when the panel is ready
 * @zh 面板启动后触发的钩子函数
 */
var ready = function () {
    var app = this.$.app;
    new Vue__default['default']({
        el: app,
        store: store,
        render: function (h) { return h(__vue_component__$1); },
    });
};
/**
 * @en The function that will be triggered when the panel is ready to close, and will terminate
 * the closing of the panel if it returns false
 * @zh 面板准备关闭的时候会触发的函数，return false 的话，会终止关闭面板
 */
var beforeClose = function () { };
/**
 * @en Hook functions after panel closure
 * @zh 面板关闭后的钩子函数
 */
var close = function () { };

exports.$ = $;
exports.beforeClose = beforeClose;
exports.close = close;
exports.linsteners = linsteners;
exports.ready = ready;
exports.style = style;
exports.template = template;
