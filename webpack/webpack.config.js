var webpack=require('webpack');
var path=require('path');
var EXtractCss=require('extract-text-webpack-plugin');
var HtmlWebpackPlugIn=require('html-webpack-plugin');

module.exports={
	//入口文件
	//entry:'./src/js/page/index.js',
	entry:'./src/js/es6/es6_2.js',
	//生成的文件
	output:{
		path:path.join(__dirname,"/dist"), //构建生成的目录
		filename:"js/bundle.js",  //根据entry入口文件生成的文件
		chunkFilename:"js/[name].js", //按需加载的文件 
	//	publicPath:"http://www.baidu.com/"  //部署路径
		
	},
	module:{
		loaders:
		[
			/*{ test:/\.css$/,loader:"style-loader!css-loader"},*/
			{test:/\.css$/,loader:EXtractCss.extract("style-loader","css-loader")},
			{ test:/\.(png|jpg|gif)$/,loader:"url-loader?limit=2048&name=imgs/pic[hash].[ext]"},
			{test:/\.html$/,loader:"html-loader"},
			{test:require.resolve('zepto'),loader:"exports-loader?window.$!script-loader"},
			
			 //exclude:表示排除某些目录
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
			
			
		]
	
	},
	plugins:[
	   //添加第三方插件
	   new webpack.ProvidePlugin({
	   	   $: 'zepto'
	   }),
	   //配置标题
	   new webpack.BannerPlugin("我是由1505FE.B开发的基于webpack的项目"),
	   new webpack.optimize.UglifyJsPlugin({
		  //忽略警告
	   	  compress:{
		  	warnings:false
		  },
		  mangle:{
			 //排除一些不想被压缩的着关键字
		  	 except: ['$super', '$', 'exports', 'require']
		  }
	   }),
	   new EXtractCss('css/style.css'),
	   new HtmlWebpackPlugIn({
	   	  template:"./src/views/index.html",  //源文件
		  filename:"default.html",  //根据template生成的文件
		  favicon:"./src/imgs/favicon.ico",  //添加站标
		  inject:true, //是否允许插入脚本
		  hash:true,  //是否允许在脚本末尾添加哈希值
		  minify:{  //压缩设置
		  	removeComments:true,  //删除注释
			collapseWhitespace:true  //合并html空白字符
		  }
	   })
		
	],
	resolve:{
		alias:{
			"dialog":"../components/dialog",
			//"common":"../"
		},
		extensions:["",".js",".css"]
	},
	devServer:{
		contentBase:"./dist",
		port:9999,
		inline:true  //保存刷新浏览器
		
	}
	


}