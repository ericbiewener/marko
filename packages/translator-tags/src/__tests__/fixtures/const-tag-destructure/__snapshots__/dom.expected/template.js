import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _y = /* @__PURE__ */_value("y", (_scope, y) => _data(_scope["#text/1"], y));
const _x = /* @__PURE__ */_value("x", (_scope, x) => _data(_scope["#text/0"], x));
const _destructure2 = (_scope, {
  x,
  y
}) => {
  _x(_scope, x);
  _y(_scope, y);
};
const _z = /* @__PURE__ */_value("z", (_scope, z) => _destructure2(_scope, z));
const _setup = _scope => {
  _z(_scope, {
    x: 1,
    y: 2
  });
};
export const _template_ = "<div> </div><!>";
export const _walks_ = /* next(1), get, out(1), replace, over(1) */"D l%b";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/const-tag-destructure/template.marko");