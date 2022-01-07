<script context="module">
export async function load({ url, params, status, fetch }) {
	return {
		props: {
			url: url,
			params: params,
		},
	}
}
</script>
<script>
	export let url
	export let params
	console.log('url',url)
	console.log('params',params)
</script>
<h1>Page 1</h1>