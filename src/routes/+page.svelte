<script>
	// @ts-nocheck

	import { browser } from "$app/environment";
	import { getContext } from "svelte";
	$: username = "";
	$: password = "";

	async function login() {
		console.log(username, password);
	}

	const near = getContext("Near");
</script>

<div class="v-box">
	<h1>SvelteKit - Near</h1>
	<div class="v-box" />
</div>
<div class="container">
	<h2>To do list</h2>
	<label for="username">User name</label>
	<input bind:value={username} type="text" id="username" />
	<label for="password">Password</label>
	<input bind:value={password} type="password" id="password" />
	<button on:click={login}>Login</button>
</div>

<style>
	@import "../styles/global.css";
	@import "../styles/components.css";
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 5vmin;
	}
</style>
