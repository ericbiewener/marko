import { on as _on, queueSource as _queueSource, data as _data, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _inputRenderBody_input = _dynamicTagAttrs("#text/2", void 0, true);
const _expr_Text_count = /* @__PURE__ */_intersection(2, _scope => {
  const {
    count
  } = _scope;
  _inputRenderBody_input(_scope, () => [count, "hello"]);
});
const _dynamicTagName = /* @__PURE__ */_conditional("#text/2", null, _expr_Text_count);
const _count_effect = _register("packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/components/tags-layout.marko_0_count", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    count
  } = _scope;
  _queueSource(_scope, _count, count + 1);
}));
const _count = /* @__PURE__ */_value("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _queueEffect(_scope, _count_effect);
}, _expr_Text_count);
const _input = /* @__PURE__ */_value("input", (_scope, input) => _dynamicTagName(_scope, input.renderBody), void 0, _dynamicTagName);
const _setup = _scope => {
  _count(_scope, 0);
};
export const _args_ = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export const _template_ = "<button id=tags> </button><div><!></div>";
export const _walks_ = /* get, next(1), get, out(1), next(1), replace, out(1) */" D lD%l";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _args_), "packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/components/tags-layout.marko");