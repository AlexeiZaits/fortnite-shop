import { ItemGood } from "./ItemGood"
import { addItem } from "./helpers/addItem"
import { useContext } from "react"
import { ShopContext } from "../contex"
import { setAmount } from "../dispatch/setAmount"
import { Notification } from "../components/Notification"
import { setNotification } from "../dispatch/setNotifiaction"
import { useState } from "react"

function viewNewNotif(setDisplay){
    setDisplay('none')
    setTimeout(() => {
        setDisplay('block')
    }, 500)
}

function ListGoods(){
    const [display, setDisplay] = useState('none')

    const { value, dispatch } = useContext(ShopContext)
    const { basket, goods, notification } = value
    
    function onClickBuy({id, price, info}){
        setAmount(1, dispatch)
        addItem(basket, id, price, info, dispatch)
        setNotification(info, dispatch)
        viewNewNotif(setDisplay)
    }
    
    return <div className="goods, row">
        {notification ? <Notification onClickClose={setDisplay} style={display}  text={notification}/>: null}
        {goods.map(good => {
           return  <ItemGood  onClickBuy={onClickBuy} key={good.offerId} {...good}/>
        })}
    </div>
}

export { ListGoods }