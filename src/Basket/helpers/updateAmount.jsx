
import { setAmount } from "../../dispatch/setAmount";  

function updateAmount(amount,price, dispatch){
    
    //увеличение кол-ва или уменьшение кол-ва товара
    if (amount === null){
        price > 0 ? setAmount(1, dispatch) :  setAmount(-1, dispatch);
    }  
    //удаление товара из корзины
    else{
        setAmount(-amount, dispatch)
    }

}

export { updateAmount }