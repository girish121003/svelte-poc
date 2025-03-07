<script lang="ts">
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
    import { base } from '$app/paths'

	export let isOpen: boolean; // Controlled by the parent
	const dispatch = createEventDispatcher();

	function closeDrawer() {
		dispatch('close'); // Notify the parent to update state
	}

	function handleClickOutside(event: any) {
		if (!isOpen) return; // ✅ Prevents closing if already closed

		if (!event.target.closest('.drawer')) {
			console.log('Closing drawer due to outside click');
			closeDrawer();
		}
	}

	onMount(() => {
		if (typeof document !== 'undefined') {
			document.addEventListener('click', handleClickOutside, { capture: true });
		}
	});

	onDestroy(() => {
		if (typeof document !== 'undefined') {
			document.removeEventListener('click', handleClickOutside, { capture: true });
		}
	});
</script>

<!-- ✅ Ensure proper class binding -->
<div class="drawer {isOpen ? 'open' : ''}">
	<button class="close-btn" on:click={closeDrawer}
		><img src="close-btn.png" alt="Drawer Close Btn" /></button
	>
	<ul class="menu">
		<li><a href="#"><img src="home-icon.png" alt="Home" /> Home</a></li>
		<li><a href="#"><img src="budget-icon.png" alt="Budget" /> Plan Your Budget</a></li>
		<li><a href="#"><img src="reports-icon.png" alt="Reports" /> Analytics & Reports</a></li>
		<li><a href="#"><img src="settings-icon.png" alt="Settings" /> Settings</a></li>
		<li>
			<a href="#"
				><img src="assistance-icon.png" alt="User Assistance" /> User Assistance</a
			>
		</li>
		<li>
			<a href="#"><img src="expenses-icon.png" alt="Expenses" /> Track Your Expenses</a>
		</li>
		<li><a href="#"><img src="summary-icon.png" alt="Summary" /> Summary</a></li>
	</ul>
	<slot />
</div>

<style>
	.drawer {
		position: fixed;
		top: 0;
		right: 0;
		width: 250px;
		height: 100%;
		background: #f8f8f8;
		box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
		transform: translateX(100%); /* Start hidden */
		transition: transform 0.3s ease-in-out;
		z-index: 1000;
		padding: 20px;
	}

	/* ✅ Correctly toggles open state */
	.drawer.open {
		transform: translateX(0);
	}

	.close-btn {
		position: absolute;
		top: 21px;
		right: 21px;
		cursor: pointer;
		font-size: 40px;
		border: none;
		background: none;
	}
	.menu {
		list-style: none;
		padding: 0;
		margin-top: 81px;
	}

	.menu li {
		margin: 15px 0;
	}

	.menu a {
		display: flex;
		align-items: center;
		background: #d97730;
		color: white;
		text-decoration: none;
		padding: 10px;
		border-radius: 10px;
		box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
	}

	.menu a img {
		width: 24px;
		height: 24px;
		margin-right: 10px;
	}
</style>
