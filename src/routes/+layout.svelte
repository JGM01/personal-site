<script lang="ts">
    import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();
    const isRootPath = $derived(page.url.pathname === '/');

    interface PostMetadata {
        title: string;
        summary: string;
        date: string; 
        tags: string[]; 
    }

    interface Post {
        slug: string;
        metadata: PostMetadata;
    }

    const postModules = import.meta.glob<{ metadata: PostMetadata }>(
        '../posts/*.svx',
        { eager: true }
    );

    const posts: Post[] = Object.keys(postModules).map((path) => {
        const slug = path.split('/').pop()?.replace('.svx', '') ?? '';
        return {
            slug,
            metadata: postModules[path].metadata || { title: 'Untitled' }
        };
    });

    const sortedPosts = [...posts].sort((a, b) => {
        if (a.metadata.date && b.metadata.date) {
            return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
        }
        return a.metadata.title.localeCompare(b.metadata.title);
    });

    let searchTerm = $state('');

    function filterPosts(posts: Post[], search: string): Post[] {
        const lowerSearch = search.toLowerCase();
        return posts.filter(post =>
            post.metadata.title.toLowerCase().includes(lowerSearch) ||
            post.metadata.summary.toLowerCase().includes(lowerSearch) ||
            post.metadata.tags.some(tag => tag.toLowerCase().includes(lowerSearch))
        );
    }


    const filteredPosts = $derived(filterPosts(sortedPosts, searchTerm));
</script>

<div class="flex flex-col md:flex-row h-screen">
<header class={`border-r px-12 py-4 md:flex md:flex-col md:basis-1/3 ${isRootPath ? 'basis-full'  : 'hidden '}`}>
    <div class=" flex flex-row my-4 justify-between"> 
        <a class="text-center text-blue-500 underline" href="/about">About</a>
        <a class="text-center text-blue-500 underline" href="/readings">Readings</a>
        <a class="text-center text-blue-500 underline" href="/info">Info</a>
    </div>
    <h1 class="text-center text-4xl font-bold my-4 underline"><a href="/" >Jacob's Website</a></h1>
    <input class="h-8 border w-full pl-2" type="text" placeholder="Search posts" bind:value={searchTerm} />
    <div class="overflow-y-auto">
        {#each filteredPosts as { slug, metadata }}
            <div class="my-4">
                <a href={`/${slug}`} class="font-semibold underline">{metadata.title}</a>
                <br />
                <span class="text-sm">{metadata.summary}</span>
                <br />
                <div class="flex flex-row">
                    {#each metadata.tags as tag}
                        <span class="text-sm mr-2 text-yellow-600">#{tag}</span>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</header>
<div class="w-full h-full flex flex-col">

<main class={`p-12 max-w-4xl mx-auto flex-1 overflow-y-auto ${isRootPath ? 'hidden ' : 'basis-full '}`}>
    <a href="/" class="md:hidden text-left text-xl font-bold underline">Home</a>
    {@render children()}
</main>
</div>
</div>

