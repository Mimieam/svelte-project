// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  // mode: 'jit',
  purge: {
    content: ['./public/index.html', './src/**/*.{js,svelte}'],
    options: {
      safelist: [
        /data-theme$/,
      ]
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'customTheme': {                          /* your theme name */
          'primary': '#D95C69',           /* Primary color */
          'primary-focus': '#BF505B',     /* Primary color - focused */
          'primary-content': '#ffffff',   /* Foreground content color to use on primary color */

          'secondary': 'var(--color-secondary)',         /* Secondary color */
          'secondary-focus': '#f3cc30',   /* Secondary color - focused */
          'secondary-content': '#ffffff', /* Foreground content color to use on secondary color */

          'accent': '#37cdbe',            /* Accent color */
          'accent-focus': '#2aa79b',      /* Accent color - focused */
          'accent-content': '#ffffff',    /* Foreground content color to use on accent color */

          'neutral': '#3d4451',           /* Neutral color */
          'neutral-focus': '#2a2e37',     /* Neutral color - focused */
          'neutral-content': '#ffffff',   /* Foreground content color to use on neutral color */

          'base-100': '#ffffff',          /* Base color of page, used for blank backgrounds */
          'base-200': '#f9fafb',          /* Base color, a little darker */
          'base-300': '#d1d5db',          /* Base color, even more darker */
          'base-content': '#1f2937',      /* Foreground content color to use on base color */

          'info': '#2094f3',              /* Info */
          'success': '#009485',           /* Success */
          'warning': '#ff9900',           /* Warning */
          'error': '#ff5724',             /* Error */

          '--rounded-box': '1rem',        /* border-radius for cards and other big elements */
          '--rounded-btn': '0.20rem',      /* border-radius for buttons and similar elements */
          '--rounded-badge': '1.9rem',    /* border-radius for badge and other small elements */

          '--animation-btn': '0.25s',     /* bounce animation time for button */
          '--animation-input': '.2s',     /* bounce animation time for checkbox, toggle, etc */

          '--padding-card': '2rem',       /* default card-body padding */

          '--btn-text-case': 'uppercase', /* default text case for buttons */
          '--navbar-padding': '.5rem',    /* default padding for navbar */
          '--border-btn': '1px',          /* default border size for button */
          '--focus-ring': '2px',          /* focus ring size for button and inputs */
          '--focus-ring-offset': '2px',   /* focus ring offset size for button and inputs */
        },
      },
      'dark', 
    ],
  },
}
