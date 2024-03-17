import { API } from "../../Api/Api"
import { API_URL } from "../../config"
import { setGoods } from "../../dispatch/setGoods"
import { getLocalData } from "./getLocalData"


const getCards = (dispatch) => {
    
    if(getLocalData(dispatch)) {
    API(API_URL, 'GET')
    .then(data => {
        localStorage.setItem('goods', JSON.stringify(data.shop))
        setGoods(data.shop, dispatch)
    })
    .catch(error => {
        console.log(error)
        setTimeout(() => getCards(dispatch), 500);
    })
}
}

export { getCards }