import { types as t } from "@marko/compiler";
import { isNativeTag } from "@marko/babel-utils";
import { isOutputHTML } from "./util/marko-config";
import { callRuntime, getHTMLRuntime } from "./util/runtime";
import * as writer from "./util/writer";

const ESCAPE_TYPES = {
  script: "escapeScript",
  style: "escapeStyle",
} as Record<string, string>;

type HTMLMethod = "escapeScript" | "escapeStyle" | "escapeXML" | "toString";
type DOMMethod = "html" | "data";

export default function (placeholder: t.NodePath<t.MarkoPlaceholder>) {
  const { confident, value: computed } = placeholder.get("value").evaluate();
  const isHTML = isOutputHTML(placeholder);
  const write = writer.writeTo(placeholder);
  const canWriteHTML =
    isHTML || (confident && (placeholder.node.escape || !computed));
  const method = canWriteHTML
    ? placeholder.node.escape
      ? ESCAPE_TYPES[getParentTagName(placeholder)] || "escapeXML"
      : "toString"
    : placeholder.node.escape
    ? "data"
    : "html";

  if (confident && canWriteHTML) {
    write`${getHTMLRuntime(placeholder)[method as HTMLMethod](computed)}`;
    placeholder.remove();
  } else {
    const callExpr = callRuntime(
      placeholder,
      method as HTMLMethod | DOMMethod,
      placeholder.node.value
    );

    if (isHTML) {
      if (placeholder.node.extra.references) {
        // write`${callRuntime(placeholder, "hydrateMarker")}`;
      }

      write`${callExpr}`;
      placeholder.remove();
    } else {
      write`<!>`;
      writer.visit(placeholder, writer.WalkCodes.Replace);
      placeholder.replaceWith(t.expressionStatement(callExpr));
    }
  }

  writer.enterShallow(placeholder);
}

function getParentTagName({ parentPath }: t.NodePath<t.MarkoPlaceholder>) {
  return (
    (parentPath.isMarkoTag() &&
      isNativeTag(parentPath) &&
      (parentPath.node.name as t.StringLiteral).value) ||
    ""
  );
}
