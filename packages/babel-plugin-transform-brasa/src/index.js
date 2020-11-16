import { declare } from "@babel/helper-plugin-utils";
import { parse } from 'brasa-parser';

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
    },
  };
});
