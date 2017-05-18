var bar = document.getElementById("bar"),
	btn = document.getElementById("btn");

bar.onmousedown = function() {
	var x = window.event.clientX,
	    max = bar.offsetWidth,
	    left = this.offsetLeft;
	this.onmousemove = function() {
		var thisx = window.event.clientX,
			btnX = Math.min(max, left + (thisx - x));
			console.log(thisx)
		btn.style.left = btnX + 'px';
	}
	this.onmouseup = new Function('this.onmousemove=null');
}