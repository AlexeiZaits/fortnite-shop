import { API_KEY } from "../config"

async function API(link, request, json=undefined){
    return fetch(link, {
        method: request,
        body: JSON.stringify(json),
        headers: {"Authorization": API_KEY , 
        "Content-Type": 'application/json; charset=UTF-8'},
    })
    .then(response =>{
        if (response.ok){
           return response.json()
        }
        else{
            console.log(`Failed in ${request} request ${link}`)
            throw new Error(`Failed in ${request} request ${link}`)
        }
    })
    .catch(error => {
        console.log(`Ошибка: ${error}`)
        throw new Error(`Ошибка: ${error}`)
    })
}

export { API }