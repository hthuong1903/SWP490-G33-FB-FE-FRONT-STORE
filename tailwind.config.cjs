module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    important: true,
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                ming: '#1C6E7E',
                cultured: '#f8f8f8',
                mistyrose: '#F7DFDA',
                facebook: '#3b5998',
                youtube: '#FF0000',
                email: '#f2a60c'
            },
            borderRadius: {
                DEFAULT: '15px'
            },
            zIndex: {
                100: '100'
            }
        }
    },
    plugins: []
}
