import { setBasket } from "../../dispatch/setBasket";
import { setAmount } from "../../dispatch/setAmount";
import { setGoods } from "../../dispatch/setGoods";

function getLocalData(dispatch){
    if(localStorage.getItem('basket'))  setBasket(JSON.parse(localStorage.getItem('basket')), dispatch);
    if(localStorage.getItem('amount'))  setAmount(JSON.parse(localStorage.getItem('amount')), dispatch, false);
    if(localStorage.getItem('goods')){
        setGoods(JSON.parse(localStorage.getItem('goods')), dispatch)
        return false
    }else{
        return true
    }
}

export { getLocalData }