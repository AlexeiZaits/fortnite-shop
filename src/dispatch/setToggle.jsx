import { ACTIONS } from "../actions"
import { update } from "./helpers/update"

function setToggle(dispatch){
    dispatch(update(ACTIONS.UPDATE_TOGGLE))
}

export { setToggle }