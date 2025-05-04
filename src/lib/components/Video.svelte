<script lang="ts">
export let videoPath = ""
</script>
    
<video loop autoplay muted playsinline pointer-events-none class="rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]  w-full h-full mx-auto my-4">
    <source src={videoPath} type="video/mp4">
</video>
