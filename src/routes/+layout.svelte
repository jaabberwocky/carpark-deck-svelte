<script lang="ts">
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
</nav>
<h1>Carpark Deck App</h1>
<slot />

<style>
	nav {
		margin-top: 10%;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
	}

	nav a {
		flex: 1;
		padding: 10px;
	}
</style>
