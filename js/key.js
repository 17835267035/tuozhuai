window.addEventListener('load',function(){
	let wenben = document.querySelector('#wenben');  //获取留言框的内容
	let writes = document.querySelector('.writes');  //获取120
	let max=wenben.maxLength;//留言框的最大长度
	let input=document.querySelector('.pinlun input');//获取文本框内容
	let submit=document.querySelector('.submit');//获取提交按钮
	console.log(submit);
	wenben.onkeyup=function(){ //键盘在留言框中弹起函数
		let str=wenben.value; //留言框中的元素设置为变量str
		writes.innerText=`${max-str.length}`//writes数值的变化
	}
	wenben.onkeydown = function(e){
		if(e.keyCode == 13){  //回车
			let write = document.querySelector('.write');
			// console.log(write);
			write.innerHTML = `
				${input.value}
				${wenben.value}`;
			input.value='';//文本框内容元素为空
			wenben.value='';//留言框内容元素为空
			
		}
	}
	submit.onclick=function(){
			let write = document.querySelector('.write');
			console.log(write);
			write.innerHTML=`
				${input.value}
				${wenben.value}`;
			input.value='';
			wenben.value='';
	}
})