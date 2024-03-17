import { updateListBasket } from "./updateListBasket"

function onClickDelete({id, amount, dispatch, basket}){
    updateListBasket(dispatch, basket, id, null, amount)
}

export { onClickDelete }