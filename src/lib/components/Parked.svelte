<script>
	import { parked } from '../shared/stores';
</script>

<div id="parked">
	{#if $parked.deck === ''}
		<p>No car parked!</p>
	{:else}
		<p>Parked at {$parked?.deck}</p>
	{/if}
</div>

<style>
    #parked {
        border: solid;
		border-color: #2B3A5510;
        text-align:center;
        width: 50%;
        padding: 5px;
        margin: 10px;
    }
</style>
