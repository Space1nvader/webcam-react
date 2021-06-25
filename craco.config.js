const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              //               '@primary-color': 'var(--red-60)',
              //               '@btn-border-radius-base': '4px',
              //               '@btn-primary-bg': 'var(--red-60)',
              //               '@btn-primary-color': 'var(--gray-0)',
              //               '@btn-default-bg': 'var(--gray-0)',
              //               '@btn-default-color': 'var(--gray-80)',
              //               '@btn-height-base': '@height-base',
              // '@btn-height-lg': '@height-lg',
              // '@btn-height-sm': '@height-sm',
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
