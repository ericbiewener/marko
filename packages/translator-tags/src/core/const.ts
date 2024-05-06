import { type Tag, assertNoParams, assertNoArgs } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoBodyContent } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import {
  BindingType,
  getBindingIdentifiers,
  trackVarReferences,
} from "../util/references";
import { getSection } from "../util/sections";
import { addValue, getTagVarSignal } from "../util/signals";
import translateVar from "../util/translate-var";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    const { node } = tag;
    const [valueAttr] = node.attributes;

    if (!node.var) {
      throw tag
        .get("name")
        .buildCodeFrameError("The 'const' tag requires a tag variable.");
    }

    if (!valueAttr) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The 'const' tag requires a default 'value' attribute.",
        );
    }

    if (
      node.attributes.length > 1 ||
      !t.isMarkoAttribute(valueAttr) ||
      (!valueAttr.default && valueAttr.name !== "value")
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The 'const' tag only supports the default 'value' attribute.",
        );
    }

    const upstreamAlias = t.isIdentifier(valueAttr.value)
      ? tag.scope.getBinding(valueAttr.value.name)?.identifier.extra?.binding
      : undefined;

    trackVarReferences(
      tag,
      BindingType.derived,
      upstreamAlias,
      (valueAttr.value.extra ??= {}),
    );

    for (const { identifier } of getBindingIdentifiers(node.var)) {
      const binding = tag.scope.getBinding(identifier.name);
      if (binding) {
        const violations = binding?.constantViolations;
        if (violations && violations.length > 0) {
          throw violations[0].buildCodeFrameError(
            "Cannot assign to a 'const' tag variable.",
          );
        }
      }
    }
  },
  translate(tag) {
    const { node } = tag;
    const [valueAttr] = node.attributes;
    const { value } = valueAttr;

    if (isOutputDOM()) {
      const section = getSection(tag);
      const derivation = getTagVarSignal(tag.get("var"))!;

      // TODO: optimize for cases like `const/x=y`
      addValue(section, value.extra?.referencedBindings, derivation, value);
    } else {
      translateVar(tag, value);
    }

    tag.remove();
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to create an constant binding.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#const",
    },
  ],
  types: "@marko/translator-tags/tag-types/const.d.marko",
} as Tag;
