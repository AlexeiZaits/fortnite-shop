
function Button(props){
    const {onClickButton, classButton, width, text} = props

    const buttonStyle={
        width: width,
    };
    
    function handleClick(event){
        event.stopPropagation();
        onClickButton(props);
    }
    return <button style={buttonStyle} className={classButton} onClick={handleClick}>{text}</button>
}

export { Button }