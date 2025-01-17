import { attr as _attr, data as _data, on as _on, queueSource as _queueSource, value as _value, createRenderer as _createRenderer, register as _register, loopOf as _loopOf, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _x$forBody = /* @__PURE__ */_value("x", (_scope, x) => _data(_scope["#text/0"], x));
const _forBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<li> </li>", /* next(1), get */"D ", void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let x;
  if (!_clean) [x] = _destructure;
  _x$forBody(_scope, x, _clean);
}));
const _for = /* @__PURE__ */_loopOf("#ul/0", _forBody);
const _list_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list", _scope => _on(_scope["#button/2"], "click", function () {
  const {
    list
  } = _scope;
  _queueSource(_scope, _list, [].concat(list).reverse());
}));
const _list = /* @__PURE__ */_value("list", (_scope, list) => {
  _queueEffect(_scope, _list_effect);
  _for(_scope, [list, function (x) {
    return x;
  }]);
});
const _open_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    open
  } = _scope;
  _queueSource(_scope, _open, !open);
}));
const _open = /* @__PURE__ */_value("open", (_scope, open) => {
  _attr(_scope["#ul/0"], "hidden", !open);
  _queueEffect(_scope, _open_effect);
});
const _setup = _scope => {
  _open(_scope, true);
  _list(_scope, [1, 2, 3]);
};
export const _template_ = "<ul></ul><button id=toggle>Toggle</button><button id=reverse>Reverse</button>";
export const _walks_ = /* get, over(1), get, over(1), get, over(1) */" b b b";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko");