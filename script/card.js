let formName = document.querySelector('.form_name')
let cardName = document.querySelector('.card_name')
let form2Name = document.querySelector('.form-secondName')
let card2Name = document.querySelector('.card_2name')
formName.addEventListener('input',function(){
    let formNameValue = formName.value
    cardName.innerHTML = formNameValue
})
form2Name.addEventListener('input',function(){
    let form2NameValue = form2Name.value
    card2Name.innerHTML = form2NameValue
})

let formCW = document.querySelector(".form_make2")
let cardCW = document.querySelector(".card_CW")
formCW.addEventListener("click",function(event){
    event.preventDefault()
    let randomCW = Math.floor(Math.random()*900)+100
    cardCW.innerHTML = `CW - ${randomCW}`
})

let formNum = document.querySelector(".form_make")
let cardNum = document.querySelector(".card_number")
formNum.addEventListener("click",function(event){
    event.preventDefault()
    let randomNumOne = Math.floor(Math.random()*9000)+1000
    let randomNumTwo = Math.floor(Math.random()*9000)+1000
    let randomNumThree = Math.floor(Math.random()*9000)+1000
    let randomNumFour = Math.floor(Math.random()*9000)+1000
    cardNum.innerHTML = `${randomNumOne} ${randomNumTwo} ${randomNumThree} ${randomNumFour}`
})

formDate = document.querySelector('.form_date')
cardDate = document.querySelector('.card_date')
formDate.addEventListener('change',function(){
    formDateValue = formDate.value
    let dateSelected = formDateValue.split('-')
    if(dateSelected.length === 3){
        let year = dateSelected[0]
        let newYear = Number(year) + 5
        let month = dateSelected[1]
        let date = dateSelected[2]
        cardDate.innerHTML = `${newYear}/${month}/${date}`
    }
})

