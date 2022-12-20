<script lang="ts">
	import Decks from '$lib/components/Decks.svelte';
	import Parked from '$lib/components/Parked.svelte';
	import { carpark } from '$lib/shared/stores';

	console.log($carpark);

	let inputDeck: string = '';

	const handleSubmit = () => {
		inputDeck = inputDeck.toUpperCase();
		if ($carpark.decks.includes(inputDeck)) {
			alert('Deck already entered previously');
		} else {
			$carpark.decks.push(inputDeck);
			$carpark = $carpark; // must self to update store
		}
		inputDeck = '';
	};
</script>

<Parked />
<Decks />
<div id="submit-deck">
	{#if inputDeck.length === 0}
		<p>Enter carpark deck below</p>
	{:else}
		<p>Entering: {inputDeck}</p>
	{/if}
	<form on:submit|preventDefault={handleSubmit}>
		<input bind:value={inputDeck} />
		<button disabled={inputDeck.length === 0} type="submit">Submit</button>
	</form>
</div>
