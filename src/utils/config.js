// src/utils/config.js
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

const config = {
  REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN,
};

export default config;
