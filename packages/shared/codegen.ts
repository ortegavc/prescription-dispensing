import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://10.64.103.116:3002/graphql',
    hooks: {
        afterAllFileWrite: 'prettier --write',
    },
    documents: ["./src/graphql/**/*.ts", "../terminal/src/infrastructure/graphql/*.ts"],
    generates: {
        "./src/graphql/__generated__/graphql-types.ts": {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo', 'named-operations-object'],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },

    }
};

export default config;
