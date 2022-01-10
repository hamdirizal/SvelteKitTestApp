export default async function getApiDataCached(url){
	try {
		let res = await fetch(url)
		if(res && res.ok){
			return await res.json()
		}
	} catch (error) {
		return null;
	}
}