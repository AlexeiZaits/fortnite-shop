import  {Button} from "../components/Button"
import { Paragraph } from "../components/Paragraph";
import { Img } from "../components/Img";

function ItemGood({displayAssets, rarity, price, onClickBuy, offerId, displayName}){
    
    let background = displayAssets[0] ? displayAssets[0]['full_background']:false; 
    let rarityName = rarity ? rarity.name: 'Неизвестно';
    
    const {finalPrice} = price;
    
    if(displayAssets[0]){
    return <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
            <Img image={background} alt={displayName}/>
        </div>
        <div className="card-content">
          <Paragraph text={"Редкость: "+rarityName}/>
          <Paragraph text={"Цена: "+finalPrice+" р"}/>
        </div>
        <div className="card-action">
          <Button id={offerId} onClickButton={onClickBuy} info={displayName} price={finalPrice} 
          text={"Купить"} classButton={'waves-effect deep-purple btn'}/>
        </div>
      </div>
    </div>
    }
}

export { ItemGood }