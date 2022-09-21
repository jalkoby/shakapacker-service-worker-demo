const webpack = require('webpack');
const { webpackConfig, merge } = require('shakapacker');
const { GenerateSW } = require('workbox-webpack-plugin');

// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.

module.exports = merge(webpackConfig, {
  plugins: [
    new GenerateSW({
      additionalManifestEntries: [
        { url: '/fallback.svg', revision: '1' }
      ],
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: ({ sameOrigin, request }) => sameOrigin && request.destination == 'document',
          handler: 'NetworkFirst',
          options: {}
        },
        {
          urlPattern: /\/api\/(trends|feed)$/,
          handler: 'NetworkFirst'
        },
        {
          urlPattern: ({ request }) => request.url.startsWith('https://robohash.org'),
          handler: 'NetworkOnly',
          options: {
            precacheFallback: { fallbackURL: '/fallback.svg' }
          }
        }
      ]
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]
});
