<script lang="ts">
	import { carpark } from '$lib/shared/stores';
</script>

<div id="decks">
	<h2>Decks</h2>
	{#if $carpark.decks.length === 0}
		<p>No carpark decks entered.</p>
	{:else}
		{#each $carpark.decks as deck}
			<div class="deck">
				{deck}
			</div>
		{/each}
	{/if}
</div>

<style>
	.deck {
		border: solid;
		padding: 5px;
		margin: 5px 10px;
		width: 50%;
		flex: 1;
	}

	#decks {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		text-align: center;
		border: solid;
		border-color: #2B3A5510;
		width: 50%;
		padding: 5px;
		padding-bottom: 10px;
	}
</style>
