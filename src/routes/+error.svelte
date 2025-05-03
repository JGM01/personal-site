<script>
  import { page } from '$app/state';
</script>

<h1 class="m-auto text-6xl font-bold">404</h1>
<p>{$page.error.message}</p>
<a href="/">Back to Home</a>
