import { attr as _attr, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, serializedScope as _serializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const selected = 0;
  for (const num of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) {
    const _scope1_id = _nextScopeId();
    _write(`<button${_attr("data-selected", selected === num)}${_attr("data-multiple", num % selected === 0)}>${_escapeXML(num)}${_markResumeNode(_scope1_id, "#text/1")}</button>${_markResumeNode(_scope1_id, "#button/0")}`);
    _writeEffect(_scope1_id, "packages/translator/src/__tests__/fixtures/basic-nested-scope-for/template.marko_1_num");
    _writeScope(_scope1_id, {
      "num": num,
      "_": _serializedScope(_scope0_id)
    });
    _maybeFlush();
  }
  _writeScope(_scope0_id, {
    "selected": selected
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/basic-nested-scope-for/template.marko");