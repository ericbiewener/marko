export { toString, escapeScript, escapeStyle, escapeXML } from "./html/content";

export { attr, attrs, classAttr, styleAttr } from "./html/attrs";

export {
  dynamicTagInput,
  dynamicTagArgs,
  createRenderer,
  patchDynamicTag,
} from "./html/dynamic-tag";

export {
  write,
  maybeFlush,
  fork,
  tryPlaceholder,
  tryCatch,
  nextTagId,
  nextScopeId,
  markResumeNode,
  writeEffect,
  writeScope,
  markResumeScopeStart,
  markResumeControlEnd,
  markResumeControlSingleNodeEnd,
  createRenderFn,
  peekSerializedScope,
  getStreamData,
} from "./html/writer";

export { createTemplate } from "./html/template";

export {
  register,
  makeSerializable,
  serializedScope,
  getRegistryInfo,
} from "./html/serializer";
