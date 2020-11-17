import { declare } from "@babel/helper-plugin-utils";
// import { parse } from 'brasa-parser';
import { parse } from '../../babel-parser/lib';

export default declare(api => {
  api.assertVersion(7);

  return {
    name: "transform-brasa",

    parserOverride(code, opts) {
      return parse(code, opts);
    },
    visitor: {
      Identifier(path) {
        if (path.node.name === "construtor") {
          path.node.name = "constructor";
        }
      },
      UnaryExpression(path) {
        if (path.node.operator === "tipode") {
          path.node.operator = "typeof";
        }
      },
      BinaryExpression(path) {
        console.log(path);
        if (path.node.operator === "instânciade") {
          path.node.operator = "instanceof";
        }
      }
    },
  };
});
