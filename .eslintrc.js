module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'eslint:recommended',

        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'plugin:storybook/recommended',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'i18next', 'react-hooks'],
    rules: {
        'max-len': ['error', { code: 80, ignoreComments: true }], // Задает максимальную длину строки в символах
        'react/jsx-indent': [2, 4], // Задает отступы для JSX-разметки (2 - ошибка, 4 пробела для отступа)
        'react/jsx-indent-props': [2, 4], // Задает отступы для пропсов в JSX (2 - ошибка, 4 пробела)
        indent: [2, 4], // Общие правила отступов для JavaScript и TypeScript файлов (4 пробела)
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }], // Разрешает использовать JSX только в файлах с расширениями .js, .jsx, .tsx
        'import/no-unresolved': 'off', // Отключает проверку на неразрешенные импорты (может быть полезно при алиасах)
        'import/prefer-default-export': 'off', // Отключает требование использовать default-экспорт, позволяет использовать именованные экспорты
        'no-unused-vars': 'off', // Отключает правило, предупреждающее о неиспользуемых переменных
        'react/require-default-props': 'off', // Отключает требование указания значений по умолчанию для пропсов в функциональных компонентах
        'react/react-in-jsx-scope': 'off', // Отключает необходимость импортировать React в каждом файле с JSX (актуально для React 17+)
        // 'react/jsx-props-no-spreading': 'warn', // Предупреждает при использовании оператора распространения пропсов (на случай возможных ошибок)
        'react/jsx-props-no-spreading': 'off',
        'import/extensions': 'off', // Отключает требование указывать расширения файлов в импортах
        'react/function-component-definition': 'off', // Отключает требование к стилю написания функциональных компонентов
        'no-shadow': 'off', // Отключает проверку на затенение переменных (когда переменная в блоке имеет то же имя, что и во внешнем)
        'import/no-extraneous-dependencies': 'off', // Отключает проверку на лишние зависимости (когда модули не указаны в package.json)
        'no-underscore-dangle': 'off', // Отключает правило, запрещающее использование нижнего подчеркивания в именах переменных
        'jsx-quotes': ['error', 'prefer-double'], // Включает двойные кавычки внутри JSX
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies // https://legacy.reactjs.org/docs/hooks-rules.html
        'no-param-reassign': 'off', // в ридаксе можно менять параметры, в линтере отключаем запрет на это
        'object-curly-spacing': 'off',
        quotes: [
            'error',
            'single',
            { avoidEscape: true }, // Одинарные кавычки вне JSX
        ],
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, ignoreAttribute: ['to', 'fallback', 'data-testid'] },
        ], // Вызывает ошибку при использовании строковых литералов в JSX (проверка на отсутствие локализации)
        // Отключаем проверку переноса аргументов в объектах
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
    globals: {
        __IS_DEV__: true,
    },
};
