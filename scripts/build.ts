import { readFile, readdir, writeFile } from 'fs/promises'
import { ensureDir, remove } from 'fs-extra'
import { join, resolve } from 'pathe'
import { filename } from 'pathe/utils'

import { base } from '../src/base'
import { optimizeSvg, replaceColors } from './svg'
import { catppuccinFlavors, catppuccinize } from './colors'

const THEMES = resolve('themes')
const ICONS = resolve(join('src', 'icons'))

const icons = await readdir(ICONS)

// ? create flavour icon dirs
await remove(THEMES)
await Promise.all(catppuccinFlavors.map(async (f) => {
  await ensureDir(join(THEMES, f, 'icons'))
}))

// ? create catppuccinized icons
icons.map(async (i) => {
  const svg = await readFile(join(ICONS, i), 'utf8')
  const optimized = optimizeSvg(svg)
  await Promise.all(catppuccinFlavors.map(async (f) => {
    const catppuccinized = replaceColors(optimized, catppuccinize(f))
    await writeFile(join(THEMES, f, 'icons', i), catppuccinized)
  }))
})

// ? generate icon definitions
const iconDefinitions = icons.reduce((d, i) => ({
  ...d,
  [filename(i)]: { iconPath: `./icons/${i}` },
}), {})

// ? merge theme
const theme = {
  ...base,
  iconDefinitions,
}

await Promise.all(catppuccinFlavors.map(async (f) => {
  await writeFile(join(THEMES, f, 'theme.json'), JSON.stringify(theme, null, 2))
}))