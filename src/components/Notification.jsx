import { Paragraph } from "./Paragraph"
import { Button } from "./Button"

function Notification({text, style, onClickClose}){
    
    
    return <div className="notification" style={{display: style}}>
        <Button onClickButton={()=>onClickClose('none')} classButton={"notification-button"} text={'x'}/> 
        <Paragraph classParagraph={'card-title'} text={'Добавлен товар'}/>
        <Paragraph text={text}/>
    </div>
}

export { Notification }