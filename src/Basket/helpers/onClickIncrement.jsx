import { updateListBasket } from "./updateListBasket"

function onClickIncrement({id, price, amount, dispatch, basket}){
    updateListBasket(dispatch, basket, id, price/amount)
}

export { onClickIncrement }