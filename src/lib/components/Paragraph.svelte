<script lang="ts">
	let { children } = $props();
</script>

<p class="indent-4 md:indent-8 text-lg/6 md:text-xl/8 my-4">
    {@render children()}
</p>
