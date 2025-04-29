<script>
    import { page } from '$app/state';

    let slug = $derived(page.params.slug);

    let postModules = import.meta.glob('../../posts/*.svx', { eager: false });

    let post = $derived(
        postModules[`../../posts/${slug}.svx`]?.().catch((err) => {
            console.error('Failed to load post:', err);
            return null;
        })
    );

</script>

{#await post}
    <p>Loading...</p>
{:then module}
    {#if module && module.default}
        <svelte:component this={module.default} />
    {:else}
        <p>Post not found for slug: {slug}</p>
    {/if}
        {:catch error}
    <p>Error loading post: {error.message}</p>
{/await}
