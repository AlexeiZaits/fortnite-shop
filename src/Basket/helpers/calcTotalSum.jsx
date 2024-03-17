function calcTotalSum(list){
    return list
    .map(item => item.price)
    .reduce((acc, currentValue) => 
        acc + currentValue, 0);
    
}

export { calcTotalSum }