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
        <div class="flex flex-col max-w-4xl ">

        <h1 class="m-auto text-6xl font-bold">404</h1>
        <p class="indent-4 md:indent-8 text-lg/6 md:text-xl/8 my-8"> 
            There is no post named <i>"{slug}"</i>, perhaps try the search bar?
            <br/>
            <a href="/">Back to Home</a>
        </p>
    </div>
    {/if}
        {:catch error}
    <p>Error loading post: {error.message}</p>
{/await}
