const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [],
  devServer:{
    proxy:{
      "/api":{
        target:"http://test.my-site.com",
      }
    }
  }
})
