window.addEventListener('load',function(){
	let box = document.querySelector('div.box');
	
	box.addEventListener('mousedown',function(e){
		let ox = e.offsetX, oy = e.offsetY; //相对于事件源
		// console.log(ox);
		// console.log(oy);
		document.addEventListener('mousemove',fn);
		box.addEventListener('mouseup',function(){
			document.removeEventListener('mousemove',fn);
			
		});
		function fn(e){
			let lefts = e.clientX-ox, tops = e.clientY-oy;
			// console.log(lefts);
			box.style.left = `${lefts}px`;
			box.style.top = `${tops}px`;
		}
	})
})
