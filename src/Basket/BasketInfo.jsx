import { Span } from "../components/Span"

function BasketInfo({text, price}){
    
    return <div className="basket-info">
        <Span  text={text}/>
        <Span  text={'Цена: '+price+' р'}/>
    </div>
}

export { BasketInfo }