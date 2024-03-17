import { updateList } from "../../helpers/updateList";
import { findFirstItem } from "../../helpers/findFirstItem";
import { updateAmount } from "./updateAmount";
import { setBasket } from "../../dispatch/setBasket";

function getNewList(list, id, price){
    return updateList(list, findFirstItem(list, id), price)
}

function updateListBasket(dispatch, list, id, price, amount=null){
    setBasket(getNewList(list, id, price), dispatch)
    updateAmount(amount, price, dispatch)
}

export { updateListBasket }