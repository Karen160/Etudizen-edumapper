import { defineComponent, toRefs, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TagAnswer",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const { isSelected } = toRefs(props);
    ref(isSelected.value);
    const classNames = computed(() => {
      return ["tag-answer rounded-full px-4 py-2 border", { "bg-neutral-100 border-black": isSelected, "border-transparent bg-neutral-100 hover:border-black": !isSelected }];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({ class: unref(classNames) }, _attrs))}><button>${ssrInterpolate(__props.name)}</button></li>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/TagAnswer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=TagAnswer-B2Arv35f.mjs.map
