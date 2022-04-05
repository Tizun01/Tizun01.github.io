var range = document.querySelector('.range')
var process = document.querySelector('.process')
var value = document.querySelector('.process span')
var body = document.querySelector('body')

function updateProcess(percent){
    process.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
    body.style.backgroundColor = `rgba(0, 0, 0, ${percent /100} )`
}

range.addEventListener('mousemove', function(e){
    var processWidth = e.pageX - this.offsetLeft
    var percent = processWidth / this.offsetWidth * 100
    percent = Math.ceil(percent)
    updateProcess(percent)
})

updateProcess(0)


var slider = document.getElementById('slider')

slider.addEventListener('change',function(val){
    console.log(this.value)
})