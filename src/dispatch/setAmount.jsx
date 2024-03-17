import { ACTIONS } from "../actions"
import { update } from "./helpers/update"

function setAmount(number, dispatch, save=true){
    
    if(localStorage.getItem('amount') && save){
        dispatch(update(ACTIONS.UPDATE_AMOUNT, number))
        localStorage.setItem('amount', +localStorage.getItem('amount')+number)
    }else{
        dispatch(update(ACTIONS.SET_AMOUNT, number))
        localStorage.setItem('amount', number)
    }
}

export { setAmount }