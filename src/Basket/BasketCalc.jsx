import { Button } from "../components/Button"
import { Span } from "../components/Span"
import { onClickIncrement } from "./helpers/onClickIncrement"
import { onClickDelete } from "./helpers/onClickDelete"
import { onClickDecrement } from "./helpers/onClickDecrement"
import { useContext } from "react"
import { ShopContext } from "../contex"

function BasketCalc({amount, id, price}){
    
    const { value, dispatch} = useContext(ShopContext)
    const { basket } = value
    
    return <div className="basket-calc">
        <Button  classButton={'basket-button'}  width={'1.6rem'} onClickButton={ ()=>onClickIncrement({basket, dispatch, id, amount, price}) } text={"+"}/>
        <Span  text={amount}/>
        <Button  classButton={'basket-button'}  width={'1.6rem'} onClickButton={ ()=>onClickDecrement({basket, dispatch, id, amount, price}) } text={'-'}/>
        <Button  classButton={'basket-button'}  width={'1.6rem'} onClickButton={ ()=>onClickDelete({basket, dispatch, id, amount, price}) } text={'x'}/> 
    </div>
}

export { BasketCalc }