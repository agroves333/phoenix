import path from 'path'

exports.onCreateWebpackConfig = ({ actions }: any) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, '../src/components'),
        theme: path.resolve(__dirname, '../src/theme.ts'),
        static: path.resolve(__dirname, '../static'),
      },
    },
  })
}
