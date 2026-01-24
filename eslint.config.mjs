import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ['out', 'dist', '**/*.d.ts'],
    },
    ...tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/naming-convention': [
                'warn',
                {
                    selector: 'import',
                    format: ['camelCase', 'PascalCase'],
                },
            ],
            curly: 'warn',
            eqeqeq: 'warn',
            'no-throw-literal': 'warn',
        },
    }
);
