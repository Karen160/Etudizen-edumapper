import _sfc_main$1 from './TagAnswer-B2Arv35f.mjs';
import { defineComponent, toRefs, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';

const _imports_0 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2014L8%2014L14%2014'%20stroke='%231B1B1B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.14788%203.88559L10.0335%201.99997L13.3333%205.2998L11.4477%207.18542M8.14788%203.88559L4.50778%207.52569C4.32024%207.71323%204.21488%207.96758%204.21488%208.2328L4.21489%2011.1184L7.1005%2011.1184C7.36572%2011.1184%207.62007%2011.0131%207.80761%2010.8255L11.4477%207.18542M8.14788%203.88559L11.4477%207.18542'%20stroke='%231B1B1B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.50492%208.49509L5.00001%205M8.49511%201.50491L5.00001%205M5.00001%205L1.50492%201.50491M5.00001%205L8.49511%208.49509'%20stroke='%231B1B1B'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardInformative",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    content: {
      type: Array,
      required: false,
      default: () => []
    },
    status: {
      type: String,
      required: false,
      default: "\xC0 compl\xE9ter"
    },
    values: {
      type: Object,
      required: false,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    const { isOpen, values } = toRefs(props);
    const isEditing = ref(isOpen.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TagAnswer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-informative bg-white rounded-2xl shadow p-5" }, _attrs))}><div class="flex justify-between items-start">`);
      if (!unref(isEditing)) {
        _push(`<!--[--><div><h2 class="text-lg font-semibold text-black">${ssrInterpolate(__props.name)}</h2><span>${ssrInterpolate(__props.status)}</span></div><button><img${ssrRenderAttr("src", _imports_0)} alt="Modifier"></button><!--]-->`);
      } else {
        _push(`<!--[--><div><!--[-->`);
        ssrRenderList(__props.content, (item, i) => {
          _push(`<div><h2 class="text-lg font-semibold text-black">${ssrInterpolate(item == null ? void 0 : item.question)}</h2><ul class="flex items-start gap-1"><!--[-->`);
          ssrRenderList(item == null ? void 0 : item.answers, (tag, j) => {
            _push(ssrRenderComponent(_component_TagAnswer, {
              key: j,
              name: tag,
              "is-selected": unref(values)[item.key] === tag
            }, null, _parent));
          });
          _push(`<!--]--></ul></div>`);
        });
        _push(`<!--]--></div>`);
        if (unref(isEditing)) {
          _push(`<button class="text-xl text-black"><img${ssrRenderAttr("src", _imports_1)} alt="Fermer"></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/molecules/CardInformative.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CardInformative-DdeNG7SO.mjs.map
