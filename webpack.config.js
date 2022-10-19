module.exports = {

  //...
  webpack: {
    configure: {
      experiments: {
        asyncWebAssembly: true,
        buildHttp: true,
        layers: true,
        lazyCompilation: true,
        outputModule: true,
        syncWebAssembly: true,
        topLevelAwait: true,
      }
    }
  }
};