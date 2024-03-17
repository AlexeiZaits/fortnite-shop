
function updateList(list, indexGood, price){
    let updateBasket = [...list]
    console.log('update', list, indexGood, price)
    //удаление товара 
    // 1) удаление если товар кончился при убавлении его в корзине updateBasket[indexGood].amount-1 === 0 && price<=0
    // 2) удаление при нажатие на кретстик price===null
    if((updateBasket[indexGood].amount-1 === 0 && price<=0) || price===null){
        updateBasket.splice(indexGood, 1)
    }
    //добавление товара
    else if(price > 0){
        updateBasket[indexGood].price +=price;
        updateBasket[indexGood].amount +=1;

    }
    //убавление товара
    else if(price < 0){
        updateBasket[indexGood].price +=price;
        updateBasket[indexGood].amount -= 1;
    }
    return updateBasket
}

export { updateList }