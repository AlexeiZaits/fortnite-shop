import { updateListBasket } from "./updateListBasket"

function onClickDecrement({id, price, amount, dispatch, basket}){
    updateListBasket(dispatch, basket, id, -price/amount)
}

export { onClickDecrement }