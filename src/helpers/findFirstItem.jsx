function findFirstItem(list, id){
    return list.findIndex((item) => {
        if (item.id === id){
            return true
        }else{
            return false
        }
    })
}

export { findFirstItem }