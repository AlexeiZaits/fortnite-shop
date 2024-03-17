import { ACTIONS } from "../actions"
import { update } from "./helpers/update"

function setNotification(bool, dispatch){
    dispatch(update(ACTIONS.SET_NOTIFICATION, bool))
}

export { setNotification }