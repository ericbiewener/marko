import Child from "./components/child.marko";
import { on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, createRenderer as _createRenderer, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, dynamicSubscribers as _dynamicSubscribers, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _count$falseChildBody_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    _: {
      count
    }
  } = _scope;
  _queueSource(_scope._, _count, count + 1);
}));
const _count$falseChildBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count/subscriber", /* @__PURE__ */_dynamicClosure("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _queueEffect(_scope, _count$falseChildBody_effect);
}));
const _falseChildBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<button> </button>", /* get, next(1), get */" D ", void 0, [_count$falseChildBody]));
const _falseChild_input = _dynamicTagAttrs("#text/0", _falseChildBody);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", _scope => _falseChild_input(_scope, () => ({})), void 0, _falseChild_input);
const _count = /* @__PURE__ */_value("count", null, _dynamicSubscribers("count"));
const _setup = _scope => {
  _count(_scope, 0);
  _dynamicTagName(_scope, false || Child || _falseChildBody);
};
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko");