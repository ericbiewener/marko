import { SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, markHydrateNode as _markHydrateNode, write as _write, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = 0;
  const show = true;
  let _ifScopeId;
  const _scope1_ = {},
    _ifRenderer = () => {};
  if (show) {
    const _scope1_id = _nextScopeId();
    _writeHydrateCall(_scope1_id, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_x");
    _writeHydrateScope(_scope1_id, {
      "x": x,
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope1_);
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}<div id=ref></div><button id=increment>Increment</button>${_markHydrateNode(_scope0_id, "#button/1")}<button id=toggle>Toggle</button>${_markHydrateNode(_scope0_id, "#button/2")}`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_show");
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_x");
  _writeHydrateScope(_scope0_id, {
    "x": x,
    "show": show,
    "#text/0!": _scope1_,
    "#text/0(": _ifRenderer
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);