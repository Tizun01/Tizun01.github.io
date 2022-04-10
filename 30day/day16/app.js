var animationElement = document.querySelectorAll('.show-on-scroll')

function toggleAnimationElementInWindow(element){
    var rect = element.getClientRects()[0]
    var heightScreen = window.innerHeight

    if(!(rect.bottom < 0 || rect.top > heightScreen)){
        element.classList.add('start')
    }else{
        element.classList.remove('start')
    }
}

function checkAnimation(){

    animationElement.forEach(el=>{
        toggleAnimationElementInWindow(el)
    })
}

window.onscroll = checkAnimation