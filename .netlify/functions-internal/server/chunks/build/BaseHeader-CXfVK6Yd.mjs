import { a as buildAssetsURL } from '../routes/renderer.mjs';
import __nuxt_component_0$1 from './Wrapper-rNqOxgQp.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("logo.eKgbhYAP.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Wrapper = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({
    id: "base-header",
    class: "border-b-[2px]"
  }, _attrs))} data-v-a5d0e3e0>`);
  _push(ssrRenderComponent(_component_Wrapper, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 data-v-a5d0e3e0${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Edumapper" data-v-a5d0e3e0${_scopeId}></h1>`);
      } else {
        return [
          createVNode("h1", null, [
            createVNode("img", {
              src: _imports_0,
              alt: "Edumapper"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bases/BaseHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a5d0e3e0"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=BaseHeader-CXfVK6Yd.mjs.map
