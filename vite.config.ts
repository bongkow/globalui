import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
      exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx'],
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'AlertModal',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'zustand',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'react/compiler-runtime'
      ],
      output: {
        assetFileNames: 'style.css',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          zustand: 'zustand',
          'react/jsx-runtime': 'jsxRuntime',
          'react/jsx-dev-runtime': 'jsxDevRuntime',
          'react/compiler-runtime': 'compilerRuntime'
        },
        exports: 'named',
        preserveModules: false,
        minifyInternalExports: true
      }
    },
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000
  }
});