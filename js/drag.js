//属性：
//this.obj  谁拖拽

//this.isX
//this.isY
//this.rangerX 0-300
//this.rangerY 100-300
//this.t
//方法：
//move
class Drag{
	constructor(obj){
		this.obj = obj;
	}
	move(){
		let that = this;
		this.obj.addEventListener('mousedown',function(e){
			let ox = e.offsetX, oy = e.offsetY;
			document.addEventListener('mousemove',fn);
			that.obj.addEventListener('mouseup',function(){
				document.removeEventListener('mousemove',fn);
			})
			function fn(e){
				let ccx = e.clientX-ox, ccy = e.clientY-oy;
				that.obj.style.left = `${ccx}px`;
				that.obj.style.top = `${ccy}px`;
			}
		})
	}
}
