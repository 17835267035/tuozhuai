$(function(){
	let small = $('.small')[0];
	let big = $('.big')[0];
	let opacity = $('.opacity')[0];
	console.log(opacity);
	let bImg = $('img',big)[0];
	let zhe = $('.zhezhao',small)[0];
	console.log(zhe);
	// let bili = bImg.offsetWidth / (parseInt(getComputedStyle(small,null).width));
	
	let mw = zhe.offsetWidth, 
		mh = zhe.offsetHeight, 
		sw=small.offsetWidth,
		sh=small.offsetHeight,
		bw=big.offsetWidth,
		bh=big.offsetHeight
	;
	let bili = sw/bw;
	opacity.onmousemove = function(e){
		let ox = e.offsetX-mw/2, oy = e.offsetY-mh/2;
		// console.log(ox);
		if(ox>=sw-mw){
			ox = sw-mw;
		}
		if(ox<=0){
			ox = 0;
		}
		if(oy>=sh-mh){
			oy = sh-mh;
		}
		if(oy<=0){
			oy = 0;
		}
		zhe.style.left = ox + 'px';			
		zhe.style.top = oy + 'px';

		// bImg
		// zhe   big   ox
		// small bImg  x
		bImg.style.width = sw * bw / mw +'px';			
		bImg.style.height = sh * bh / mh +'px';
		bImg.style.left = -(sw * ox / mw) +'px';			
		bImg.style.top = -(sh * oy / mh) +'px';			
		// bImg.style.left = `${-ox*bili}px`;
		// bImg.style.top = `${-oy*bili}px`;
		// zhe.style.opacity = 1;
		// function fn(e){
		// 	let ccx = e.clientX, ccy = e.clientY;
		// 	zhe.style.left = `${ccx}px`;
		// 	zhe.style.top = `${ccy}px`;
		// }
		
	}
})