import { data as _data, bindRenderer as _bindRenderer, inChild as _inChild, value as _value, createRenderer as _createRenderer, register as _register, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _customTag, _args_ as _customTag_args, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./components/custom-tag.marko";
const _count2$customTagBody = /* @__PURE__ */_value("count2", (_scope, count2) => _data(_scope["#text/1"], count2));
const _count$customTagBody = /* @__PURE__ */_value("count", (_scope, count) => _data(_scope["#text/0"], count));
const _customTagBody = _register("packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-args/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<div>Counts: <!>,<!></div>", /* next(1), over(1), replace, over(2), replace */"Db%c%", void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let count, count2;
  if (!_clean) [count, count2] = _destructure;
  _count$customTagBody(_scope, count, _clean);
  _count2$customTagBody(_scope, count2, _clean);
}));
const _setup = _scope => {
  _customTag(_scope["#childScope/0"]);
  _customTag_args(_scope["#childScope/0"], [{
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _customTagBody)
  }]);
};
export const _template_ = `${_customTag_template}<!>`;
export const _walks_ = /* beginChild, _customTag_walks, endChild */`/${_customTag_walks}&D`;
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-args/template.marko");