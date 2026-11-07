const colors = require('tailwindcss/colors');

const gray = {
    50: colors.neutral[50],
    100: colors.neutral[100],
    200: colors.neutral[200],
    300: colors.neutral[300],
    400: colors.neutral[400],
    500: colors.neutral[500],
    600: colors.neutral[600],
    700: colors.neutral[700],
    800: colors.neutral[800],
    900: colors.neutral[900],
};

module.exports = {
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['"IBM Plex Sans"', '"Roboto"', 'system-ui', 'sans-serif'],
            },
            colors: {
                black: '#101019',
                // "primary" and "neutral" are deprecated, prefer the use of "blue" and "gray"
                // in new code.
                primary: colors.blue,
                orange: colors.orange,
                gray: gray,
                cyan: {
                    ...colors.cyan,
                    500: '#31c0ce',
                    600: '#20a9b8',
                    700: '#168392',
                },
                neutral: {
                    50: colors.neutral[50],
                    100: colors.neutral[100],
                    200: colors.neutral[200],
                    300: colors.neutral[300],
                    400: colors.neutral[400],
                    500: colors.neutral[500],
                    600: colors.neutral[600],
                    700: '#1d1c2a',
                    800: '#171622',
                    900: '#101019',
                },
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};
