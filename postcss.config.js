module.exports = {
    "plugins": [
        require('tailwindcss')('tailwind.js'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
        require('autoprefixer')(),
    ]
}