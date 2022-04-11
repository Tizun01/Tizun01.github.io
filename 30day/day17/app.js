const face = document.querySelector('.counter.face h2')
const youtube = document.querySelector('.counter.youtube h2')
const tiktok = document.querySelector('.counter.tiktok h2')
var body = document.querySelector('body')

function updateProcess(percent){
    body.style.backgroundColor = `rgba(0, 0, 0, ${percent /100} )`
}

function counterUp(el, to) {
	let speed = 1000
	let from = 0
	let step = to / speed
	const counter = setInterval(function () {
		from += step
		if (from > to) {
			clearInterval(counter)
			el.innerText = to
		} else {
			el.innerText = Math.ceil(from)    
		}
        var percent = el.innerText
        percent = Math.ceil(percent)
        updateProcess(percent)
        
	}, 1)
}


counterUp(face, 100)
