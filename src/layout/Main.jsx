import { useContext } from "react"
import { ShopContext } from "../contex"
import { Preloader } from "../components/Preloader"
import { Basket } from "../Basket/Basket"
import { BasketList } from "../Basket/BasketList"
import { ListGoods } from "../Goods/ListGoods"
import { useGetCards } from "./customHooks/useGetCards"

function Main(){
   
    const { value, dispatch } = useContext(ShopContext)
    const { toggle, loading, goods } = value

    useGetCards(goods, dispatch)

    return  <main className="container content">
            {toggle ? <Basket />: <BasketList/>}
            {loading ? <ListGoods /> : <Preloader/>}
        </main>
}

export { Main }

// сохранять кол-во товаров в корзине