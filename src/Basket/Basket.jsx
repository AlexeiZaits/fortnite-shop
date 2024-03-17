import { ShopContext } from "../contex"
import { useContext } from "react"
import { IText } from "../components/IText";
import { setToggle } from "../dispatch/setToggle";

function Basket(){
    
    const {value, dispatch} = useContext(ShopContext)
    
    function handleClick(){
        setToggle(dispatch)
    }

    const { amount } = value
    console.log(amount, localStorage.getItem('amount'))
    return <div onClick={handleClick} className="cart">
        <IText text={'shopping_cart'} className={"material-icons cart-icon"}/>
        {amount ? <span>{amount}</span>: null}
    </div>
}

export { Basket }