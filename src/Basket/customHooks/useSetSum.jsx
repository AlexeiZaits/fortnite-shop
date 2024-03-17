import { useEffect } from "react"
import { calcTotalSum } from "../helpers/calcTotalSum"

function useSetSum(setSumBasket, basket){
    useEffect(()=>{
        setSumBasket(calcTotalSum(basket))
    }, [basket, setSumBasket])
}

export { useSetSum }