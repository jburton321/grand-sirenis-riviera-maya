import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, mkdirSync, readdirSync, statSync, existsSync } from 'fs'

function copyPublicDirPlugin() {
  return {
    name: 'copy-public-dir',
    closeBundle() {
      const publicDir = resolve(__dirname, 'public')
      const outDir = resolve(__dirname, 'dist')

      function copyRecursive(src: string, dest: string) {
        if (!existsSync(src)) return

        const entries = readdirSync(src, { withFileTypes: true })

        for (const entry of entries) {
          if (entry.name.includes(' ')) continue

          const srcPath = resolve(src, entry.name)
          const destPath = resolve(dest, entry.name)

          try {
            if (entry.isDirectory()) {
              mkdirSync(destPath, { recursive: true })
              copyRecursive(srcPath, destPath)
            } else {
              copyFileSync(srcPath, destPath)
            }
          } catch {
          }
        }
      }

      copyRecursive(publicDir, outDir)
    }
  }
}

export default defineConfig({
  plugins: [react(), copyPublicDirPlugin()],
  build: {
    copyPublicDir: false,
  },
  optimizeDeps: {
    include: ['react-map-gl', 'mapbox-gl'],
  },
})
