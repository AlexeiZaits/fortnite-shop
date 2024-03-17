import { ACTIONS } from "./actions"

export function reducer(state, {type, payload}){
    switch(type){
        case ACTIONS.UPDATE_GOODS:
        return {
                ...state,
                goods: payload,
                loading: true,
            }
        case ACTIONS.UPDATE_TOGGLE:
        return {
            ...state,
            toggle: !state.toggle
        }
        case ACTIONS.UPDATE_BASKET:
        return {
            ...state,
            basket: payload
        }
        case ACTIONS.UPDATE_AMOUNT:
        return {
            ...state,
            amount: state.amount + payload
        }
        case ACTIONS.SET_AMOUNT:
        return {
            ...state,
            amount: payload
        }
        case ACTIONS.SET_NOTIFICATION:
        return {
            ...state,
            notification: payload
        }
        default: 
            return state
    }

}

