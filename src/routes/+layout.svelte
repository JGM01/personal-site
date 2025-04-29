<script lang="ts">
    import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();
    const isRootPath = $derived(page.url.pathname === '/');

</script>

<div class="flex flex-col md:flex-row h-screen">
<header class={`border-r px-12 py-4 md:flex md:flex-col md:basis-1/3 ${isRootPath ? 'basis-full'  : 'hidden '}`}>
    <div class=" flex flex-row my-4 justify-between"> 
        <a class="text-center text-blue-500 underline" href="/about">About</a>
        <a class="text-center text-blue-500 underline" href="/readings">Readings</a>
        <a class="text-center text-blue-500 underline" href="/info">Info</a>
    </div>
    <h1 class="text-center text-4xl font-bold my-4 underline"><a href="/" >Jacob's Website</a></h1>
    <input class="h-8 border w-full pl-2" type="text" placeholder="Search posts (this does not currently work)"/>
    <div class="overflow-y-auto">
        <div class="my-4">
            <a href="/Creating_a_personal_website" class="font-semibold underline">Creating a personal website</a>
            <br/>
            <span class="text-sm ">It took a surprising amount of time to create this website. Mostly because I refused to seriously do it. Debating styling, debating the technical details...</span>
        </div>
        <div class="my-4">
            <a href="/Periods_should_be_outside_of_quotes" class="font-semibold underline">Periods should be outside of quotes</a>
            <br/>
            <span class="text-sm ">Quotes are meant to scope the words which are being said. The period ends the scope of the sentence I am writing. If I end my sentence on a quote...</span>
        </div>
        <div class="my-4">
            <a href="/Please_just_call_it_a_computer" class="font-semibold underline">Please just call it a computer</a>
            <br/>
            <span class="text-sm ">I recently got swapped to an infrastructure role at my job, which means I need to learn AWS because that's the proprietary system my job decided to...</span>
        </div>

    </div>
</header>
<div class="w-full h-full flex flex-col">

<main class={`p-12 max-w-4xl mx-auto flex-1 overflow-y-auto ${isRootPath ? 'hidden ' : 'basis-full '}`}>
    <a href="/" class="md:hidden text-left text-xl font-bold underline">Home</a>
    {@render children()}
</main>
</div>
</div>

