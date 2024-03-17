import { findFirstItem } from "../../helpers/findFirstItem"
import { updateList } from "../../helpers/updateList"
import { setBasket } from "../../dispatch/setBasket"

function addItem(basket, id, price, name, dispatch){
    
    const indexGood = basket && findFirstItem(basket, id)
   
    // добавление нового item если его нету в корзине
    if (indexGood === -1){
        setBasket([...basket, {id,name, price, amount:1}], dispatch)

    // обновление существуещего в корзине item (прибавление price и amount)
    }else if(indexGood||indexGood===0){
        
        setBasket(updateList(basket, indexGood, price), dispatch)
    }

}

export { addItem }