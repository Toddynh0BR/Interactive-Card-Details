import * as el from "./js/elements.js";


/*Name*/
el.UserName.addEventListener('input', ()=> {
    el.CardName.textContent = el.UserName.value
    el.ErrorName.classList.add('pError')
    el.UserName.classList.remove('error')
    if(el.UserName.value == ""){
     el.CardName.textContent = "Jane Appleseed"
    }
})

/*Number*/
el.UserNumber.addEventListener('input', ()=> {
    el.CardNumber.textContent = el.UserNumber.value
    el.ErrorNumber.classList.add('pError')
    el.UserNumber.classList.remove('error')
    if(el.UserNumber.value == ""){
        el.CardNumber.textContent = "0000 0000 0000 0000"
       }
})

/*MM*/
el.UserMM.addEventListener('input', ()=> {
    el.CardMM.textContent = el.UserMM.value
    el.ErrorMM.classList.add('pError')
    el.UserMM.classList.remove('error')
    if(el.UserMM.value == ""){
        el.CardMM.textContent = "00"
       }
})
/*YY*/
el.UserYY.addEventListener('input', ()=> {
    el.CardYY.textContent = el.UserYY.value
    el.ErrorYY.classList.add('pError')
    el.UserYY.classList.remove('error')
    if(el.UserYY.value == ""){
        el.CardYY.textContent = "00"
       }
})
/*CVC*/
el.UserCVC.addEventListener('input', ()=> {
    el.CardCVC.textContent = el.UserCVC.value
    el.ErrorCVC.classList.add('pError')
    el.UserCVC.classList.remove('error')
    if(el.UserCVC.value == ""){
        el.CardCVC.textContent = "123"
       }
})



el.btnSubmit.addEventListener('click', (event)=>{
    event.preventDefault()
    if(el.UserName.value == ""){
        el.ErrorName.classList.remove('pError')
        el.UserName.classList.add('error')
    }
    if(el.UserNumber.value.length < 19){
        el.ErrorNumber.classList.remove('pError')
        el.UserNumber.classList.add('error')
    }
    if(el.UserMM.value.length < 2){
        el.ErrorMM.classList.remove('pError')
        el.UserMM.classList.add('error')
    }
    if(el.UserYY.value.length < 2){
        el.ErrorYY.classList.remove('pError') 
        el.UserYY.classList.add('error')
    }
    if(el.UserCVC.value.length < 3){
        el.ErrorCVC.classList.remove('pError')
        el.UserCVC.classList.add('error')
    }

    if(el.UserName.value === "" || el.UserNumber.value.length < 19 || el.UserMM.value.length < 2 || el.UserYY.value.length < 2 || el.UserCVC.value.length < 3){
        return
    }else {
     el.form.classList.add('hide')
     el.CompletePage.classList.remove('hide')
    }
    
})





   
 
      
      