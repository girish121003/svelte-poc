<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    let formFields: any = writable([{ id: 1, name: "", email: "" }]); // Initial field

    function addField() {
        formFields.update((fields: any) => [...fields, { id: Date.now(), name: "", email: "" }]);
    }

    function removeField(id: number) {
        formFields.update((fields: any) => fields.filter((field:any) => field.id !== id));
    }

    function updateField(id: number, key: string, value: string) {
        formFields.update((fields:any) => 
            fields.map((field: any) => (field.id === id ? { ...field, [key]: value } : field))
        );
    }

 
    function handleSubmit() {
        formFields.subscribe((fields : any) => {
            console.log("Submitted Data:", fields);
        })(); // Unsubscribing immediately
        alert("Form submitted! Check console for data.");
    }
</script>

<h2>Dynamic Form in Svelte</h2>

<form on:submit|preventDefault={handleSubmit}>
    {#each $formFields as field (field.id)}
        <div class="field">
            <input type="text" placeholder="Name" bind:value={field.name} 
                on:input={(e:any) => updateField(field.id, "name", e.target.value)} />
            <input type="email" placeholder="Email" bind:value={field.email} 
                on:input={(e:any) => updateField(field.id, "email", e.target.value)} />
            <button type="button" on:click={() => removeField(field.id)}>❌ Remove</button>
        </div>
    {/each}

    <button type="button" on:click={addField}>➕ Add Field</button>
    <button type="submit">Submit</button>
</form>


<style>
    form { max-width: 400px; margin: auto; }
    .field { display: flex; gap: 10px; margin-bottom: 10px; }
    input { flex: 1; padding: 5px; }
    button { padding: 5px; cursor: pointer; }
</style>