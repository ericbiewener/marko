import { on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _clickCount_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-counter/template.marko_0_clickCount", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    clickCount
  } = _scope;
  _queueSource(_scope, _clickCount, clickCount + 1);
}));
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => {
  _data(_scope["#text/1"], clickCount);
  _queueEffect(_scope, _clickCount_effect);
});
const _setup = _scope => {
  _clickCount(_scope, 0);
};
export const _template_ = "<div><button> </button></div>";
export const _walks_ = /* next(1), get, next(1), get, out(2) */"D D m";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-counter/template.marko");