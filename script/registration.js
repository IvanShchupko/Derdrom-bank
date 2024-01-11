let buttonSub = document.querySelector('.registration__button')
buttonSub.addEventListener('click', function(){
    let userName = document.querySelector('.registration__username')
    let email = document.querySelector('.registration__email')
    let password = document.querySelector('.registration__password')
    let tel = document.querySelector('.registration__tel')

    let userNameValue = userName.value
    let emailValue = email.value
    let passwordValue = password.value
    let telValue = tel.value

    

    if(userNameValue.length === 0 || (userNameValue[0] === userNameValue[0].toLowerCase())){
        let modalFirst = document.querySelector(".modal")
        if(modalFirst.className === "modal"){
            modalFirst.classList.add("falseModal")
        }
        setTimeout(function(){
            modalFirst.classList.remove('falseModal')
        },2000)
    }
    else if(!emailValue.includes('@gmail.com')){
        let modalSecond = document.querySelector('.modal2')
        if(modalSecond.className === 'modal2'){
            modalSecond.classList.add('falseModal2')
        }
        setTimeout(function(){
            modalSecond.classList.remove('falseModal2')
        },2000)
    }
    else if(passwordValue.length < 7){
        let modalThird = document.querySelector('.modal3')
        if(modalThird.className === 'modal3'){
            modalThird.classList.add('falseModal3')
        }
        setTimeout(function(){
            modalThird.classList.remove('falseModal3')
        },2000)
    }
    else if(!telValue.includes('+') || telValue.length !== 13){
        let modalFourth = document.querySelector('.modal4')
        if(modalFourth.className === 'modal4'){
            modalFourth.classList.add('falseModal4')
        }
        setTimeout(function(){
            modalFourth.classList.remove('falseModal4')
        },2000)
    }
    else{
        window.location.href = './index.html'
    }
})