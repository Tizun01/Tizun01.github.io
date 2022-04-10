var listImg = document.querySelectorAll('.list-image div')
var next = document.querySelector('.next')
var prev = document.querySelector('.prev')
var imgFeature = document.querySelector('.img-feature img')

var currentIndex = 0

setCurrent(currentIndex)

function setCurrent(index) {
	currentIndex = index
	imgFeature.src = listImg[currentIndex].querySelector('img').src

	listImg.forEach((item) => {
		item.classList.remove('active')
	})

	// set active
	listImg[currentIndex].classList.add('active')
}

listImg.forEach((img, index) => {
	img.addEventListener('click', (e) => {
		setCurrent(index)
	})
})

next.addEventListener('click', () => {
	if (currentIndex == listImg.length - 1) {
		currentIndex = 0
	} else currentIndex++

	setCurrent(currentIndex)
})

prev.addEventListener('click', () => {
	if (currentIndex == 0) currentIndex = listImg.length - 1
	else currentIndex--

	setCurrent(currentIndex)
})
