<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex flex-row">
<header class="flex basis-1/3 flex-col px-12 py-4">
    <div class=" grid grid-cols-3"> 
        <a class="text-center text-blue-500" href="/about">About</a>
        <a class="text-center text-blue-500" href="/readings">Readings</a>
        <a class="text-center text-blue-500" href="/info">Info</a>
    </div>
    <h1 class="text-center text-4xl font-bold mb-4 mt-8">Jacob</h1>
    <input class="h-8 border" type="text" placeholder="Search posts"/>
    <div class="my-4">
        <a href="creating-a-personal-website" class="font-semibold">Creating a personal website</a>
        <br/>
        <span class="text-sm ">It took a surprising amount of time to create this website. Mostly because I refused to seriously do it. Debating styling, debating the technical details...</span>
        <div class="text-yellow-500 text-sm font-semibold"> #Web #Svelte #Motivation</div>
    </div>
    <div class="my-4">
        <a href="periods-should-be-outside-of-quotes" class="font-semibold">Periods should be outside of quotes</a>
        <br/>
        <span class="text-sm ">Quotes are meant to scope the words which are being said. The period ends the scope of the sentence I am writing. If I end my sentence on a quote...</span>
        <div class="text-yellow-500 text-sm font-semibold"> #Grammar #1984</div>
    </div>
    <div class="my-4">
        <a href="please-just-call-it-a-computer" class="font-semibold">Please just call it a computer</a>
        <br/>
        <span class="text-sm ">I recently got swapped to an infrastructure role at my job, which means I need to learn AWS because that's the proprietary system my job decided to...</span>
        <div class="text-yellow-500 text-sm font-semibold"> #AWS #Learning </div>
    </div>
</header>

<main class="basis-2/3 p-12">
    {@render children()}
</main>
</div>

