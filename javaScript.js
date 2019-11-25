var arr = ["Orbit Group", "Energy Technology Company ", "Egypt - Nasr City","اوربت جروب",],
	i = 0,
	heading = document.getElementById('heading');

function slide() {
	'use strict';
	heading.style.opacity = 1;
		heading.textContent = arr[i];
}

setTimeout(slide, 1000);
setInterval(next,3000);

function next() {
	'use strict';
	
	i = i + 1;
	if (i == arr.length) {
		i = 0;
	}
	window.console.log(i);
	heading.style.opacity = 0;
	setTimeout(slide, 1000);
	window.console.log('end next');
}
