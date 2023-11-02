<script>
	import { onMount } from 'svelte';
	import { reactive, set } from 'svelte/store';
	import fetch from 'node-fetch';
  
	const imageGenerated = '';
  
	// Your Replicate API token
	const YOUR_API_TOKEN = 'your-actual-api-token-here';
  
	// Store to manage the prompt input
	const promptInput = reactive({ prompt: '' });
  
	// Function to fetch the image
	async function generateImage() {
	  const model = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
	  const input = { prompt: promptInput.prompt };
  
	  try {
		const response = await fetch('https://replicate.com/api/models/stability-ai/stable-diffusion/run', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${YOUR_API_TOKEN}` // Use your actual API token
		  },
		  body: JSON.stringify({ model, input })
		});
  
		if (response.ok) {
		  const data = await response.json();
		imageGenerated = data[0];
		} else {
		  console.error('Failed to generate image.');
		}
	  } catch (error) {
		console.error('Error:', error);
	  }
	}
  
	onMount(() => {
	  generateImage();
	});
  </script>
  
  <div>
	<h1>Generate Image</h1>
	<label for="promptInput">Enter Prompt:</label>
	<input type="text" id="promptInput" bind:value={promptInput.prompt} />
  
	<button on:click={generateImage}>Generate Image</button>
  
	<h1>Generated Image</h1>
	<img {src=imageGenerated} alt="Generated Image" />
  </div>
  