import { classAttr as _classAttr, on as _on, queueSource as _queueSource, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _className_effect = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    className
  } = _scope;
  _queueSource(_scope, _className, className === "A" ? "B" : "A");
}));
const _className = /* @__PURE__ */_value("className", (_scope, className) => {
  _classAttr(_scope["#p/0"], className);
  _queueEffect(_scope, _className_effect);
});
const _setup = _scope => {
  _className(_scope, "A");
};
export const _template_ = "<!><p>paragraph</p><button></button>";
export const _walks_ = /* get, over(1), get, over(1) */"D b b";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko");