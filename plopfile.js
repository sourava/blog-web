module.exports = plop => {
    plop.setGenerator('reduxModule', {
        description: 'Create a redux module',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your redux feature name?'
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/features/{{camelCase name}}/{{camelCase name}}Actions.js',
                templateFile: 'plop-templates/Actions.js.hbs',
            },
            {
                type: 'add',
                path: 'src/features/{{camelCase name}}/{{camelCase name}}Reducer.js',
                templateFile: 'plop-templates/Reducer.js.hbs',
            },
            {
                type: 'append',
                path: 'src/rootReducer.js',
                pattern: '/* PLOP_INJECT_IMPORT_REDUCER */',
                template: `import {{camelCase name}}Reducer from 'features/{{camelCase name}}/{{camelCase name}}Reducer.js';`
            },
            {
                type: 'append',
                path: 'src/rootReducer.js',
                pattern: '/* PLOP_INJECT_REDUCER */',
                template: `{{camelCase name}}Reducer,`
            },
        ],
    });

    plop.setGenerator('asyncAction', {
        description: 'Add an async action',
        prompts: [
            {
                type: 'input',
                name: 'feature',
                message: 'What is your redux feature name?'
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your async action type?'
            },
        ],
        actions: [
            {
                type: 'append',
                path: 'src/features/{{camelCase feature}}/{{camelCase feature}}Actions.js',
                pattern: '/* PLOP_INJECT_ASYNC_ACTION */',
                templateFile: 'plop-templates/AsyncAction.js.hbs',
            },
            {
                type: 'append',
                path: 'src/features/{{camelCase feature}}/{{camelCase feature}}Actions.js',
                pattern: '/* PLOP_INJECT_ASYNC_ACTION_EXPORT */',
                template: '{{camelCase name}}ActionType,{{camelCase name}}'
            },
            {
                type: 'append',
                path: 'src/features/{{camelCase feature}}/{{camelCase feature}}Reducer.js',
                pattern: '/* PLOP_INJECT_ASYNC_ACTION_TYPE */',
                template: '{{camelCase name}}ActionType'
            },
            {
                type: 'append',
                path: 'src/features/{{camelCase feature}}/{{camelCase feature}}Reducer.js',
                pattern: '/* PLOP_INJECT_ASYNC_REDUCER_INITIAL_STATE */',
                templateFile: 'plop-templates/AsyncReducerInitialState.js.hbs',
            },
            {
                type: 'append',
                path: 'src/features/{{camelCase feature}}/{{camelCase feature}}Reducer.js',
                pattern: '/* PLOP_INJECT_ASYNC_REDUCER_STATE */',
                templateFile: 'plop-templates/AsyncReducer.js.hbs',
            }
        ],
    });
};