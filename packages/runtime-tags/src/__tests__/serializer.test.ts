import snap from "mocha-snap";
import {
  Serializer,
  makeSerializable,
  register,
  stringify,
} from "../html/serializer";

// TODO: assert deserialized strings.
describe("runtime-tags/html/serializer", () => {
  describe("stringify", () => {
    it("example", async () => {
      const data = {
        strings: "hello\nworld",
        numbers: [1, NaN, Infinity],
        booleans: [true, false],
        void: [null, undefined],
        regexps: /abc/g,
        maps: new Map([[1, 2]]),
        sets: new Set([1, 2]),
        nested: {
          object: {
            "special-keys": 1,
          },
        },
      };

      (data.nested.object as any).cyclical = data;

      await snap.inline(
        stringify(data),
        `(b,s,h,j)=>(h={strings:"hello\\nworld",numbers:[1,NaN,Infinity],booleans:[!0,!1],void:[null,],regexps:/abc/g,maps:new Map([[1,2]]),sets:new Set([1,2]),nested:{object:j={"special-keys":1}}},j.cyclical=h,h)`,
      );
    });

    it("undefined", async () => {
      await snap.inline(stringify(undefined), `void 0`);
    });

    it("null", async () => {
      await snap.inline(stringify(null), `null`);
    });

    it("boolean", async () => {
      await snap.inline(stringify(true), `!0`);
      await snap.inline(stringify(false), `!1`);
    });

    it("string", async () => {
      await snap.inline(
        stringify('"\b\t\n\f\r\v\0\\<\u2028\u2029some other content'),
        // eslint-disable-next-line no-irregular-whitespace
        `"\\"	\\n\\r \\\\\\x3C\\u2028\\u2029some other content"`,
      );
    });

    it("number", async () => {
      await snap.inline(stringify(1), `1`);
      await snap.inline(stringify(-1), `-1`);
      await snap.inline(stringify(NaN), `NaN`);
      await snap.inline(stringify(Infinity), `Infinity`);
      await snap.inline(stringify(-Infinity), `-Infinity`);
    });

    it("date", async () => {
      await snap.inline(
        stringify(new Date(0)),
        `new Date("1970-01-01T00:00:00.000Z")`,
      );
    });

    it("map", async () => {
      await snap.inline(
        stringify(
          new Map([
            [1, 2],
            [3, 4],
          ]),
        ),
        `new Map([[1,2],[3,4]])`,
      );
    });

    it("set", async () => {
      await snap.inline(stringify(new Set([1, 2, 3, 4])), `new Set([1,2,3,4])`);
    });

    it("object", async () => {
      await snap.inline(stringify({}), `(b,s)=>({})`);
      await snap.inline(
        stringify({ a: 1, b: "2", "c-d": 3 }),
        `(b,s)=>({a:1,b:"2","c-d":3})`,
      );

      // Escaping invalid identifiers
      await snap.inline(stringify({ "0": 1 }), `(b,s)=>({0:1})`);
      await snap.inline(stringify({ "a:": 1 }), `(b,s)=>({"a:":1})`);
      await snap.inline(stringify({ "[": 1 }), `(b,s)=>({"[":1})`);
    });

    it("array", async () => {
      await snap.inline(stringify([]), `[]`);
      await snap.inline(stringify([1, "2", 3]), `[1,"2",3]`);
    });

    it("null prototype", async () => {
      const obj = Object.create(null);
      obj.x = 1;
      await snap.inline(
        stringify(obj),
        `Object.assign(Object.create(null),{x:1}))`,
      );
    });

    it("nested", async () => {
      await snap.inline(
        stringify({
          array: [
            {
              a: 1,
              b: ["c"],
            },

            2,
          ],
        }),
        `(b,s)=>({array:[{a:1,b:["c"]},2]})`,
      );
    });

    it("shared", async () => {
      const registered = new Date(0);
      const pattern = /test/;
      const child = { name: "Henry" };
      const children = [child];

      const mother = {
        name: "Jane",
        registered,
        pattern,
        firstChild: child,
        children,
      };

      const father = {
        name: "Frank",
        registered,
        pattern,
        firstChild: child,
        children,
      };

      await snap.inline(
        stringify({
          mother,
          father,
        }),
        `(b,s,h,j,k,m)=>({mother:{name:"Jane",registered:j=new Date("1970-01-01T00:00:00.000Z"),pattern:k=/test/,firstChild:h={name:"Henry"},children:m=[h]},father:{name:"Frank",registered:j,pattern:k,firstChild:h,children:m}})`,
      );
    });

    it("circular object", async () => {
      const parent = {
        name: "parent",
      } as any;

      const child = {
        parent,
      };

      parent.firstChild = child;
      parent.children = [child];

      await snap.inline(
        stringify({ parent }),
        `(b,s,h,j,k)=>(k={parent:h={name:"parent",firstChild:j={},children:[j]}},j.parent=h,k)`,
      );
    });

    it("circular object combined assignments", async () => {
      const parent = {
        name: "parent",
      } as any;

      const child = {
        parentA: parent,
        parentB: parent,
        "parent-c": parent,
      };

      parent.children = [child];

      await snap.inline(
        stringify({ parent }),
        `(b,s,h,j,k)=>(k={parent:h={name:"parent",children:[j={}]}},j.parentA=j.parentB=j["parent-c"]=h,k)`,
      );
    });

    it("circular array", async () => {
      const a: any = [];
      const b: any = [a, 1, a];
      a.push(b);
      a.push(2);
      a.push(b);

      await snap.inline(
        stringify(a),
        `(b,s,h,j)=>(h=[j=[,1,],2,j],j[0]=j[2]=h,h)`,
      );
    });

    it("unsupported constructor", async () => {
      class Thing {}
      await snap.inline(stringify({ thing: new Thing() }), `(b,s)=>({})`);
    });

    it("unsupported function", async () => {
      await snap.inline(
        stringify({ thing: function test() {} }),
        `(b,s)=>({})`,
      );
    });

    it("custom function serialization", async () => {
      const scopeId = 0;
      const scope_0 = {};
      const serializer = new Serializer(new Map([[scopeId, scope_0]]));
      function test() {}
      register(test, "foo", scopeId);
      await snap.inline(
        serializer.stringify({ 0: scope_0, thing: test }),
        `(b,s,h)=>({0:h={},thing:b("foo",h)})`,
      );
    });

    it("sparse array", async () => {
      await snap.inline(
        // eslint-disable-next-line no-sparse-arrays
        stringify([, , , 5, , , "foo", , , 10]),
        `[,,,5,,,"foo",,,10]`,
      );
    });

    it("shared multiflush", async () => {
      const serializer = new Serializer(new Map());
      const registered = new Date(0);
      const pattern = /test/;
      const sharedChild = { name: "Henry" };

      const mother = {
        name: "Jane",
        registered,
        pattern,
        lastChild: sharedChild,
        children: [{ name: "Abigail" }, sharedChild],
      };

      const father = {
        name: "Frank",
        registered,
        pattern,
        lastChild: sharedChild,
        children: [{ name: "Gabriel" }, sharedChild],
      };

      await snap.inline(
        serializer.stringify({
          mother,
        }),
        `(b,s,h)=>({mother:{name:"Jane",registered:new Date("1970-01-01T00:00:00.000Z"),pattern:/test/,lastChild:h={name:"Henry"},children:[{name:"Abigail"},h]}})`,
      );
      await snap.inline(
        serializer.stringify({
          father,
        }),
        `(b,s,h)=>({father:{name:"Frank",registered:s.mother.registered,pattern:s.mother.pattern,lastChild:h=s.mother.lastChild,children:[{name:"Gabriel"},h]}})`,
      );
    });

    it("custom serializer", async () => {
      const serializer = new Serializer(new Map());

      class Thing {
        constructor(public name: string) {
          this.name === "foo";
        }
      }

      const thing = makeSerializable(new Thing("foo"), (s) =>
        s.code("new Thing(").value("foo").code(")"),
      );

      await snap.inline(
        serializer.stringify({
          thing,
        }),
        `(b,s)=>({thing:new Thing("foo")})`,
      );
    });

    it("Map with circular reference", async () => {
      const circular: any = {};
      circular.circle = circular;
      const data = {
        map: new Map([[1, circular]]),
      };

      await snap.inline(
        stringify(data),
        `(b,s,h,j)=>(j={map:new Map([[1,h={}]])},h.circle=h,j)`,
      );
    });
  });
});
