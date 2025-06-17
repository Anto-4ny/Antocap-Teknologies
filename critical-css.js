import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import * as critical from 'critical'

export async function generateCriticalCSS() {
  const htmlPath = resolve(__dirname, 'dist/index.html')
  const html = readFileSync(htmlPath, 'utf8')

  try {
    const { css } = await critical.generate({
      base: 'dist/',
      html,
      inline: true,
      width: 1920,
      height: 1080,
      penthouse: {
        puppeteer: {
          executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // ✅ Update this path if needed
        },
      },
    })

    writeFileSync(htmlPath, html.replace('</head>', `<style>${css}</style></head>`))
    console.log('✅ Critical CSS successfully inlined!')
  } catch (error) {
    console.error('❌ Error generating critical CSS:', error)
  }
}
