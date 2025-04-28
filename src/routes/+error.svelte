<script>
  import { page } from '$app/state';
</script>

<h1>Error {$page.status}</h1>
<p>{$page.error.message}</p>
<a href="/">Back to Home</a>
