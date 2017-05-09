//引用全局css
//引入组件

require('../../css/common/reset.css')
require('../../css/global/style.css')
require('../../css/page/page.css')


/*
$('#btn').on('click',function() {
	require.ensure(
		['dialog/dialog.js'],
		function(require) {
		var Odialog=require('dialog/dialog.js');
		    new Odialog(new Date().getTime()); 	
		},'dia');
	
	//require.ensure(依赖组件,回调函数,'名称');

});
*/

$("#btn").on('click',function(){
	require.ensure(['dialog/dialog.js'],()=>{		
			var Odialog=require('dialog/dialog.js');
		    new Odialog(new Date().getTime()); 	
	
	},'dia');

});

