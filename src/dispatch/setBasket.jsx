import { ACTIONS } from "../actions"
import { update } from "./helpers/update"

function setBasket(list, dispatch){
    dispatch(update(ACTIONS.UPDATE_BASKET, list))
    localStorage.setItem('basket', JSON.stringify(list))
}

export { setBasket }