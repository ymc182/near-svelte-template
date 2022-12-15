<script>
	import { setContext } from "svelte";
	import { keyStores, connect, WalletConnection, Contract } from "near-api-js";
	import * as buffer from "buffer";
	import { browser } from "$app/environment";

	export const CONTRACT_ID = "dev-13543.r-82878-19776.ewtd.testnet";
	export const NETWORK_ID = "testnet";
	export const MARKETPLACE_CONTRACT_ID = "dev-1671022392028-34830485235897";

	async function login() {
		const keyStore = new keyStores.BrowserLocalStorageKeyStore();
		const near = await connect({
			networkId: NETWORK_ID,
			keyStore: keyStore,
			nodeUrl: "https://rpc.testnet.near.org",
			walletUrl: "https://wallet.testnet.near.org",
		});
		const wallet = new WalletConnection(near, null);
		const account = wallet.account();
		const contract = new Contract(account, CONTRACT_ID, {
			viewMethods: ["get_nft", "get_nfts_by_owner_id"],
			changeMethods: ["nft_mint", "nft_transfer"],
		});
		wallet.requestSignIn({
			contractId: CONTRACT_ID,
		});
		/* 	setContext("contract", contract);
		setContext("wallet", wallet);
		setContext("account", account);
		setContext("near", near); */
	}
</script>

<button class="btn" on:click={login}> Login </button>

<style>
	button {
		background: none;
		color: white;
		border: none;
		text-decoration: underline;
		border-radius: 5px;
		padding: 5px;
	}

	button:hover {
		background: #fff;
		color: #000;
		text-decoration: none;
	}
</style>
