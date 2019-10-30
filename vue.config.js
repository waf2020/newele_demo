module.exports={
    devServer:{
      disableHostCheck :true,
      open:true,//自动打开浏览器
      port:8080,
      hotOnly:false,//webpack 已经试下了热更新，这里false即可
      proxy:{
        '/api':{
          target:"https://ele-interface.herokuapp.com/api/",
          ws:true,
          changeOrigin : true,
          pathRewrite:{
            '^/api':''
          }
        }
      }

    },
    css: {
      loaderOptions: {
        sass: {
          prependData: `
            @import "@/assets/css/index.scss";
          `
        }
      }
    }
}