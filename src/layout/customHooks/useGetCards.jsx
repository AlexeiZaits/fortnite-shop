import { useEffect } from "react"
import { getCards } from "../helpers/getCards"

function useGetCards(goods, dispatch){
    useEffect(() => {
       if(!goods) getCards(dispatch);
       
    }, )

}

export { useGetCards }