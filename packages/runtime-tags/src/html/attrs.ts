import { classValue, isVoid, styleValue } from "../common/helpers";

export function classAttr(val: unknown) {
  return stringAttr("class", classValue(val));
}

export function styleAttr(val: unknown) {
  return stringAttr("style", styleValue(val));
}

export function attr(name: string, val: unknown) {
  return isVoid(val) ? "" : nonVoidAttr(name, val);
}

export function attrs(data: Record<string, unknown>) {
  let result = "";

  for (const name in data) {
    const val = data[name];

    switch (name) {
      case "class":
        result += classAttr(val);
        break;
      case "style":
        result += styleAttr(val);
        break;
      default:
        // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
        // Avoids outputting attribute names that would be invalid or
        // be an event handler / renderBody.
        if (!(isVoid(val) || /^on[A-Z-]|^renderBody$|[\s/>"'=]/.test(name))) {
          result += nonVoidAttr(name, val);
        }
        break;
    }
  }

  return result;
}

function stringAttr(name: string, val: string) {
  return val && ` ${name}=${escapeAttrValue(val)}`;
}

function nonVoidAttr(name: string, val: unknown) {
  switch (typeof val) {
    case "string":
      return ` ${name + attrAssignment(val)}`;
    case "boolean":
      return ` ${name}`;
    case "number":
      return ` ${name}=${val}`;
    case "object":
      if (val instanceof RegExp) {
        return ` ${name + attrAssignment(val.source)}`;
      }
      break;
  }

  return ` ${name + attrAssignment(val + "")}`;
}

function attrAssignment(val: string) {
  return val ? `=${escapeAttrValue(val)}` : "";
}

const unsafeAttrChars = /["'>\s]/g;
function escapeAttrValue(str: string) {
  if (unsafeAttrChars.test(str)) {
    const c = str[unsafeAttrChars.lastIndex - 1];
    unsafeAttrChars.lastIndex = 0;

    return c === '"'
      ? `'${str.replace(/'/g, "&#39;")}'`
      : `"${str.replace(/"/g, "&#34;")}"`;
  }

  return str;
}
