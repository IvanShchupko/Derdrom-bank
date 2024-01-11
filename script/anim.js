let texT = document.querySelector('.TEXT')
let anim = document.querySelector('.body')
    window.addEventListener('load',function(){
        texT.classList.add('tuck')
        anim.classList.add('anim')
        this.setTimeout(function(){
            texT.classList.remove('tuck')
            anim.classList.remove('anim')
        },1000)
    })

