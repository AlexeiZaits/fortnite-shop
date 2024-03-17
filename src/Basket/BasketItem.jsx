
import { BasketInfo } from "./BasketInfo";
import { BasketCalc } from "./BasketCalc";

function BasketItem({text, price, amount, id}){
   return <a href="#!" className="collection-item basket-item " style={{display:"flex"}}>
         <BasketInfo text={text} price={price}/>
         <BasketCalc amount={amount} id={id} price={price}/> 
      </a>
}

export { BasketItem }