import { ACTIONS } from "../actions"
import { update } from "./helpers/update"

function setGoods(list, dispatch){
    dispatch(update(ACTIONS.UPDATE_GOODS, list))
}

export { setGoods }