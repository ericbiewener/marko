import { classAttr as _classAttr, bindRenderer as _bindRenderer, createRenderer as _createRenderer, register as _register, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, intersections as _intersections, value as _value, values as _values, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _customTag, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./components/custom-tag.marko";
const _testBody = _register("packages/translator-tags/src/__tests__/fixtures/attr-class/template.marko_2_renderer", /* @__PURE__ */_createRenderer("Hello", ""));
const _inputTestBody = _register("packages/translator-tags/src/__tests__/fixtures/attr-class/template.marko_1_renderer", /* @__PURE__ */_createRenderer("", ""));
const _inputTest_input = _dynamicTagAttrs("#text/3", _inputTestBody);
const _expr_Text_c_d = /* @__PURE__ */_intersection(3, _scope => {
  const {
    c,
    d
  } = _scope;
  _inputTest_input(_scope, () => ({
    class: ["a", {
      b: c,
      d
    }],
    test: {
      class: ["a", {
        b: c,
        d
      }],
      renderBody: /* @__PURE__ */_bindRenderer(_scope, _testBody)
    }
  }));
});
const _expr_c_d = /* @__PURE__ */_intersection(2, _scope => {
  const {
    c,
    d
  } = _scope;
  _classAttr(_scope["#div/0"], ["a", {
    b: c,
    d
  }]);
});
const _dynamicTagName = /* @__PURE__ */_conditional("#text/3", null, _expr_Text_c_d);
const _d = /* @__PURE__ */_value("d", null, _intersections([_expr_c_d, _expr_Text_c_d]));
const _c = /* @__PURE__ */_value("c", null, _intersections([_expr_c_d, _expr_Text_c_d]));
const _destructure2 = (_scope, _destructure, _clean) => {
  let c, d;
  if (!_clean) ({
    c,
    d
  } = _destructure);
  _c(_scope, c, _clean);
  _d(_scope, d, _clean);
};
const _input = /* @__PURE__ */_value("input", (_scope, input) => {
  _destructure2(_scope, input);
  _dynamicTagName(_scope, input.test || _inputTestBody);
}, void 0, _values([_destructure2, _dynamicTagName]));
const _setup = _scope => {
  _customTag(_scope["#childScope/1"]);
  _customTag(_scope["#childScope/2"]);
};
export const _args_ = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export const _template_ = `<div></div><div class="a b"></div><div class="a b c"></div>${_customTag_template}${_customTag_template}<!><!>`;
export const _walks_ = /* get, over(3), beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, replace, over(1) */` d/${_customTag_walks}&/${_customTag_walks}&%bD`;
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _args_), "packages/translator-tags/src/__tests__/fixtures/attr-class/template.marko");