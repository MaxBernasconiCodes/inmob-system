const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },

    },
    corePlugins: { //Aspect Ratio for WIREUI
        aspectRatio: false,
      },

    variants: {
        extend: {
            backgroundColor: ['active'],
        }
    },
    presents: [
        require('./vendor/wireui/wireui/tailwind.config.js'),//wireUI
    ],
    content: [
        './app/**/*.php',
        './resources/**/*.html',
        './resources/**/*.js',
        './resources/**/*.jsx',
        './resources/**/*.ts',
        './resources/**/*.tsx',
        './resources/**/*.php',
        './resources/**/*.vue',
        './resources/**/*.twig',
        './vendor/wireui/wireui/resources/**/*.blade.php',//wireUI
        './vendor/wireui/wireui/ts/**/*.ts',//wireUI
        './vendor/wireui/wireui/src/View/**/*.php'//wireUI
    ],
    darkMode: 'class', //for PowerGrid Dark mode
    plugins: [
        //require('@tailwindcss/forms'), replaced to correct Power Grid troubles with switch
        require("@tailwindcss/forms")({
            strategy: 'class',
          }),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'), //aspect Ratio for WireUI

    ],
}
