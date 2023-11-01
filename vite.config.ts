import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPath from 'vite-tsconfig-paths';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsConfigPath(), istanbul()],
  server: {
    port: 3001,
    strictPort: true,
    open: true,
  },
});
