module.exports = {
    extends: 'airbnb',
    quotes: [2, 'single'],
    plugins: [
        'react',
        'react-native',
        'jsx-a11y',
        'import',
        'prettier'
    ],
    parser: '@babel/eslint-parser',
    env: {
        jest: true,
        'react-native/react-native': true,
    },
    rules: {
        'indent': 'off',
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        'padded-blocks': 'off',
        'arrow-body-style': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react-native/no-unused-styles': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 2,
        'react-native/no-single-element-style-arrays': 2,
        'linebreak-style': 0,
    },
    global: {
        fetch: false,
    }
};