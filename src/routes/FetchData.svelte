<script lang="ts">
	import { onMount } from "svelte";
    import { writable } from "svelte/store";

    let posts :any = writable([]); // State to store API data
    let loading = $state(true);
    let error = $state("");

    // Effect runs when the component mounts
    onMount(async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) throw new Error("Failed to fetch posts");
            
            posts = await response.json(); // Store API data
        } catch (err:any) {
            error = err.message; // Handle errors
        } finally {
            loading = false;
        }
    });
</script>

{#if loading}
    <p>Loading posts...</p>
{:else if error}
    <p style="color: red;">Error: {error}</p>
{:else}
    <ul>
        {#each posts.slice(0, 5) as post} <!-- Show only first 5 -->
            <li>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
            </li>
        {/each}
    </ul>
{/if}