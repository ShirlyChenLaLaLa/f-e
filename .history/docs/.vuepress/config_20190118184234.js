module.exports =  {
  title: 'Hello ~',
  description: 'Just a small front-end engineer',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}