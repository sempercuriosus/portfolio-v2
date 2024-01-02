import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      external: [
        'src/assets/images/eric-dev-pic-2.JPG',
        'src/assets/resume/2024-jan-resume-eric-hulse.pdf',
      ],
    },
  },
});

