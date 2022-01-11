<script context="module" lang="ts">
	/**
  * @type {import('@sveltejs/kit').Load}
  */
	export async function load({ page, error, status, fetch }) {

		const res: Response = await fetch("https://api.shelfgenie.io/website-settings")

    if (res.ok) { 
			return { props: { websiteSettings: await res.json() } }
		}
		else{
			return { props: { websiteSettings: null } }
		}
	}
</script>

<script>
	export let websiteSettings
	console.log('websiteSettings',websiteSettings)
</script>

<h1>Welcome to Page Two</h1>
<p>Update 12</p>
