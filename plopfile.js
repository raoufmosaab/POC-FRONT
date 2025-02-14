import plop from 'node-plop';

export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Component.js.hbs',
      },
    ],
  });
}