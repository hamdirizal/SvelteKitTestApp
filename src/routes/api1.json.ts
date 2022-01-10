import getApiDataCached from "../myscript"

export const get = async function(req){
    let data = await getApiDataCached('https://api.shelfgenie.io/website-settings')
    return { body: JSON.stringify(data) }
}