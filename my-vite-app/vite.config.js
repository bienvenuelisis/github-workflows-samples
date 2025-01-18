// vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/github-workflows-samples/', // Replace <REPO_NAME> with your repository name
});
