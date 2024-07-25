export default function (plop) {
  plop.setHelper("sentenceCase", (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  });

  plop.setHelper("snakeCase", (str) => {
    return str
      .replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map((word) => word.toLowerCase())
      .join("_");
  });

  plop.setGenerator("components", {
    description: "Creating components",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
        validate: function (value) {
          if (/.+/.test(value)) {
           return true // return typeNameExist(value) ? "the name already exist!" : true;
          }
          return "name is required";
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "./{{ sentenceCase name }}/package.json",
        templateFile: "_components_templates/package_template.hbs",
      },
      {
        type: "add",
        path: "./{{ sentenceCase name }}/tsconfig.json",
        templateFile: "_components_templates/tsconfig_template.hbs",
      },
       {
        type: "add",
        path: "./{{ sentenceCase name }}/src/{{ lowerCase name }}/{{ lowerCase name }}.tsx",
        templateFile: "_components_templates/component_template.hbs",
      },
       {
        type: "add",
        path: "./{{ sentenceCase name }}/src/{{ lowerCase name }}/index.ts",
        templateFile: "_components_templates/component_index_template.hbs",
      },
       {
        type: "add",
        path: "./{{ sentenceCase name }}/src/index.ts",
        templateFile: "_components_templates/src_index_template.hbs",
      },
    ],
  });
}
