<!-- src/routes/generate-image.svelte -->
<script>
	import { onMount } from 'svelte';
	import Replicate from 'replicate';
  
	let userPrompt = 'a 19th century portrait of a raccoon gentleman wearing a suit';
	let generatedImage = '';
  
	async function generateImage() {
	  const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });
	  const model = 'stability-ai/stable-diffusion:2a865c9a94c9992b6689365b75db2d678d5022505ed3f63a5f53929a31a46947';
	  const input = { prompt: userPrompt };
  
	  try {
		const output = await replicate.run(model, { input });
		generatedImage = output.image_url;
	  } catch (error) {
		console.error('Image generation failed:', error);
		// Handle errors here
	  }
	}
  
	onMount(generateImage); // Automatically generate an image when the component loads
  </script>
  
  <h1>AI Image Generation</h1>
  <form on:submit|preventDefault={generateImage}>
	<label for="userPrompt">Enter a prompt:</label>
	<input type="text" id="userPrompt" bind:value={userPrompt} />
	<button type="submit">Generate Image</button>
  </form>
  
  {#if generatedImage}
	<h2>Generated Image</h2>
	<img src={generatedImage} alt="Generated Image" />
  {/if}
  