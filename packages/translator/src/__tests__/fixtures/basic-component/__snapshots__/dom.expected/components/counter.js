import { on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _clickCount_effect = _register("packages/translator/src/__tests__/fixtures/basic-component/components/counter.marko_0_clickCount", _scope => _on(_scope["#button/0"], "click", function () {
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
export const template = "<button> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, void 0, void 0, "packages/translator/src/__tests__/fixtures/basic-component/components/counter.marko");