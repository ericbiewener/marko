import { on as _on, queueSource as _queueSource, data as _data, intersection as _intersection, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _expr_count_multiplier = /* @__PURE__ */_intersection(2, _scope => {
  const {
    count,
    multiplier
  } = _scope;
  _multipliedCount(_scope, count * multiplier);
});
const _multipliedCount = /* @__PURE__ */_value("multipliedCount", (_scope, multipliedCount) => _data(_scope["#text/3"], multipliedCount));
const _multiplier_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko_0_multiplier", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    multiplier
  } = _scope;
  _queueSource(_scope, _multiplier, multiplier + 1);
}));
const _multiplier = /* @__PURE__ */_value("multiplier", (_scope, multiplier) => {
  _data(_scope["#text/1"], multiplier);
  _queueEffect(_scope, _multiplier_effect);
}, _expr_count_multiplier);
const _count_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko_0_count", _scope => _on(_scope["#button/2"], "click", function () {
  const {
    count
  } = _scope;
  _queueSource(_scope, _count, count + 1);
}));
const _count = /* @__PURE__ */_value("count", (_scope, count) => _queueEffect(_scope, _count_effect), _expr_count_multiplier);
const _setup = _scope => {
  _count(_scope, 0);
  _multiplier(_scope, 1);
};
export const _template_ = "<button id=multiplier>increase multiplier (<!>)</button><button id=count>increase count</button><div> </div>";
export const _walks_ = /* get, next(1), over(1), replace, out(1), get, over(1), next(1), get, out(1) */" Db%l bD l";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko");