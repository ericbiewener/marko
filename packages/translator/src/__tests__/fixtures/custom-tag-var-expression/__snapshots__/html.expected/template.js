import _child from "./components/child.marko";
import { createRenderer as _createRenderer, register as _register, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const data = _child._({}, _register( /* @__PURE__ */_createRenderer(() => {}), "packages/translator/src/__tests__/fixtures/custom-tag-var-expression/template.marko_0_data", _scope0_id));
  _write(`<div>${_escapeXML(data)}${_markResumeNode(_scope0_id, "#text/1")}</div>`);
  _writeScope(_scope0_id, {});
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/custom-tag-var-expression/template.marko");