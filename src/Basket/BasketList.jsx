import { useState, useContext, useEffect  } from "react"
import { ShopContext } from "../contex";
import { BasketItem } from "./BasketItem"
import { Button } from "../components/Button"
import { useSetSum } from "./customHooks/useSetSum"
import { setToggle } from "../dispatch/setToggle";
import { useRef } from "react";


function BasketList(){
    
    const {value, dispatch} = useContext(ShopContext)
    const { basket } = value

    const [sumBasket, setSumBasket] = useState(0)

    const basketRef = useRef(null)
    
    useSetSum(setSumBasket, basket)
    
    useEffect(()=>{
        basketRef.current.focus()
    },[])

    function hadleKeyPress(event){
        if(event.key==='Escape'){
            setToggle(dispatch)
        }
    }

    function handleClick(){
        setToggle(dispatch)
    }

    return  <div ref={basketRef} tabIndex={-1} onKeyDown={hadleKeyPress} className="collection basket">
        
        <Button width={'3rem'} classButton={'btn waves-effect waves-light'} onClickButton={handleClick} text={'x'}/>
        {basket.map(item => {
           return <BasketItem
           key={item.id} price={item.price} amount={item.amount} id={item.id} text={item.name}/>
        })}
        <p  className='collection-item'>Общая сумма: <span>{sumBasket} р</span></p>
        <Button classButton={'btn waves-effect waves-light blockCenter'} text={'Оплатить'}/>
    </div>  
          
}

export { BasketList }