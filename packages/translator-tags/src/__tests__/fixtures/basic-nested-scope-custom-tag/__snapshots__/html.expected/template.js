import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, serializedScope as _serializedScope, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, peekSerializedScope as _peekSerializedScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  const _childScope = _peekSerializedScope();
  _child._({
    renderBody: /* @__PURE__ */_createRenderer(() => {
      const _scope1_id = _nextScopeId();
      _write(`<button>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/1")}</button>${_markResumeNode(_scope1_id, "#button/0")}`);
      _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count/subscriber");
      _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count");
      _writeScope(_scope1_id, {
        "_": _serializedScope(_scope0_id)
      });
    })
  });
  _writeScope(_scope0_id, {
    "count": count,
    "#childScope/0": _childScope
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko");