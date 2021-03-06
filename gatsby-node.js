const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, './src/components'),
        theme: path.resolve(__dirname, './src/theme.ts'),
        static: path.resolve(__dirname, './static'),
      },
    },
  })
}
