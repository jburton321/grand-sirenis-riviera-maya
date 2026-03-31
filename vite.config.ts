import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, mkdirSync, readdirSync, statSync, existsSync } from 'fs'

/**
 * Absolute origin (no trailing slash) for canonical + Open Graph URLs.
 * - Set `VITE_SITE_BASE` on Vercel Production when using a custom domain (e.g. vacationvip subpath).
 * - Preview builds use `https://${VERCEL_URL}` so og:image matches the deployment host.
 */
function siteBase(): string {
  const explicit = process.env.VITE_SITE_BASE?.trim().replace(/\/$/, '')
  if (explicit) return explicit
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, '')}`
  return 'https://vacationvip.com/getaways/vvip-uvc-grand-sirenis-riviera-maya-299'
}

function injectSiteBaseMetaPlugin() {
  return {
    name: 'inject-site-base-meta',
    transformIndexHtml(html: string) {
      return html.replaceAll('__SITE_BASE__', siteBase())
    },
  }
}

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
  plugins: [react(), injectSiteBaseMetaPlugin(), copyPublicDirPlugin()],
  build: {
    copyPublicDir: false,
  },
})
