/** @type {import("snowpack").SnowpackUserConfig } */
import webpack from 'webpack';


export default {
  env: {
    API_URL: '',
  },
  mount: {
    public: {url: "/",  static: true, resolve: false},
    src: '/_dist_',
  },  
  plugins: [
    /* ... */
    '@snowpack/plugin-svelte',
  // ['@snowpack/plugin-webpack',
  //     {
  //       extendConfig: (config) => {
  //         config.plugins.push(
  //           new webpack.DefinePlugin({
  //             __SNOWPACK_ENV__: JSON.stringify({
  //               MODE: 'production',
  //               NODE_ENV: 'production',
  //               SSR: false
  //             })
  //           })
  //         )
  //         return config;
  //       },
  //     }
  //   ],
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-dotenv',
    'tailwindcss'
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
    sourcemap: 'inline',
    splitting: true,
    treeshake: true,
    entrypoints: ["src/index.js", 'src/index2.js'],
    preload: true,
  },
  packageOptions: {
    // remote enables something called streaming imports. Streaming imports enable Snowpack to bypass npm installation by converting bare imports (e.g., import React from 'react';) into CDN imports from Skypack.
    // "source": "remote",
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    sourcemap: true,
    watch:true,
  },
};
