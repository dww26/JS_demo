require('./dialog.css');
var dialogHTML=require('./dialog.html');

module.exports=function(arg) {
	console.log('这是dialog组件');
	$('body').append(dialogHTML);	
	$('.box>span').last().text(arg);	
	

}