/*
    TODO : 공통된 webpack 설정은 분리 작업
    
*/

module.exports = {
    mode: 'development',
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '@': resolve('src'),
        '@atoms': resolve('src/components/atoms/'),
        '@module': resolve('src/components/module/'),
        '@template': resolve('src/components/template/'),
        '@lib': resolve('src/lib/'),
        '@const': resolve('src/constants/serviceConstants'),
      },
    },
    entry: {
      app: ['core-js/stable', './src/index.js'],
    },
    output: {
      path: path.resolve(`${__dirname}/dist`),
      publicPath: '/',
      filename: 'site.js',
    },
}