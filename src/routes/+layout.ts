import { browser } from "$app/environment";

export const load = async ({ fetch: any }) => {
	if (!browser) return;
	console.log("I LOADED");
	const { keyStores, connect, WalletConnection, Contract } = await import("near-api-js");
	const CONTRACT_ID = "dev-13543.r-82878-19776.ewtd.testnet";
	const NETWORK_ID = "testnet";
	const MARKETPLACE_CONTRACT_ID = "dev-1671022392028-34830485235897";
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

	const accountId = wallet.getAccountId();
	return {
		accountId,
		contract,
		wallet,
	};
};
