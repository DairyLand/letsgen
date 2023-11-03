<script>
	let memeData = null;
  
	async function fetchRandomMeme() {
	  try {
		const response = await fetch('https://meme-api.com/gimme');
		if (response.ok) {
		  memeData = await response.json();
		} else {
		  console.error('Failed to fetch meme');
		}
	  } catch (error) {
		console.error('Error fetching meme:', error);
	  }
	}
  </script>
  
  <main>
	<button on:click={fetchRandomMeme}>Summon Random Meme</button>
  
	{#if memeData}
	  <div>
		<img src={memeData.url} alt={memeData.title} />
	  </div>
	{:else}
	  <p>Click the button to fetch a meme.</p>
	{/if}
  </main>
  