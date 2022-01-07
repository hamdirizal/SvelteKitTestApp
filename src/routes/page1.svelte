<script context="module">
export async function load({ url, params, status, fetch }) {	
	const res = await fetch("https://api.shelfgenie.io/website-settings")
	if(res && res.ok){
		const resData = await res.json()
		return {props: {websiteSettings: resData } };
	}

	return {props: {websiteSettings: null } };
}
</script>
<script>
	export let websiteSettings
	console.log('websiteSettings',websiteSettings)
</script>
<h1>Page 1</h1>