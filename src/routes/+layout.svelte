<script>
	import { setContext } from "svelte";
	import Near from "../components/Near.svelte";
	export let data;

	$: loggedInUser = data.accountId ? data.accountId : null;
	//onMount

	function logout() {
		data.wallet.signOut();
		//reload page sveltekit
		window.location.reload();
	}

	setContext("Near", data);
	setContext("logout", logout);
</script>

<nav class="h-box nav" style="justify-content: space-around;">
	<a href="/">home</a>
	<a href="/about">about</a>
	{#if loggedInUser}
		<div class="nav-right">
			<p>{loggedInUser}</p>
			<button class="btn" on:click={logout}>Logout</button>
		</div>
	{/if}
	{#if !loggedInUser}
		<div class="nav-right">
			<Near />
		</div>
	{/if}
</nav>
<slot />

<style>
	@import "../styles/global.css";
	@import "../styles/components.css";
	nav {
		padding: 10px;
		background-color: white;
		color: black;
	}
	a {
		color: black;
	}
	.nav {
		display: flex;
		justify-content: space-around;
	}
	.nav-right {
		display: flex;
		gap: 10px;
		justify-content: flex-end;
	}
	.nav button {
		background: none;
		color: black;
		border: none;
		text-decoration: underline;
		border-radius: 5px;
		padding: 5px;
	}
</style>
