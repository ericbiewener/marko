export const v = 123;
import { data as _data, value as _value2, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/dom";
const _value = /* @__PURE__ */_value2("value", (_scope, value) => _data(_scope["#text/0"], value));
export const attrs = (_scope, _destructure, _clean) => {
  let value;
  if (!_clean) ({
    value
  } = _destructure);
  _value(_scope, value, _clean);
};
export { _value };
export const template = "<div> </div>";
export const walks = /* next(1), get, out(1) */"D l";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator/src/__tests__/fixtures/basic-export/template.marko");