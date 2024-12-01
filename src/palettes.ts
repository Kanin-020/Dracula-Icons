import { type labels, variants } from '@catppuccin/palette'
import 'dotenv/config'

export type CattppucinVariant =
  | 'dracula'
  | 'draculaPro'
  | 'draculaProAlucard'
  | 'latte'

export const catppuccinVariants = [
  'dracula',
  'draculaPro',
  'draculaProAlucard',
  'latte',
] as const satisfies Readonly<CattppucinVariant[]>

export type CatppuccinColor = keyof typeof labels

export const catppuccinColors = [
  'blue',
  'flamingo',
  'green',
  'lavender',
  'mantle',
  'maroon',
  'mauve',
  'overlay1',
  'peach',
  'pink',
  'red',
  'rosewater',
  'sapphire',
  'sky',
  'teal',
  'text',
  'yellow',
] as const satisfies Readonly<CatppuccinColor[]>

const dracula: Partial<Record<CatppuccinColor, string>> = {
  rosewater: '#FF79C6',
  flamingo: '#FF79C6',
  pink: '#FF79C6',
  mauve: '#BD93F9',
  red: '#FF5555',
  maroon: '#FF5555',
  peach: '#FFB86C',
  yellow: '#F1FA8C',
  green: '#50FA7B',
  teal: '#8BE9FD',
  sky: '#8BE9FD',
  sapphire: '#8BE9FD',
  blue: '#8BE9FD',
  lavender: '#8BE9FD',

  text: '#F8F8F2',
  subtext1: '#F8F8F2',
  subtext0: '#F8F8F2',
  overlay2: '#6272A4',
  overlay1: '#6272A4',
  overlay0: '#6272A4',
  surface2: '#282A36',
  surface1: '#282A36',
  surface0: '#282A36',

  base: '#20232c',
  mantle: '#20232c',
  crust: '#20232c',

}

const draculaPro: Partial<Record<CatppuccinColor, string>> = {
  rosewater: process.env.PRO_PINK,
  flamingo: process.env.PRO_PINK,
  pink: process.env.PRO_PINK,
  mauve: process.env.PRO_PURPLE,
  red: process.env.PRO_RED,
  maroon: process.env.PRO_RED,
  peach: process.env.PRO_ORANGE,
  yellow: process.env.PRO_YELLOW,
  green: process.env.PRO_GREEN,
  teal: process.env.PRO_BLUE,
  sky: process.env.PRO_BLUE,
  sapphire: process.env.PRO_BLUE,
  blue: process.env.PRO_BLUE,
  lavender: process.env.PRO_BLUE,

  text: process.env.PRO_TEXT,
  subtext1: process.env.PRO_TEXT,
  subtext0: process.env.PRO_TEXT,
  overlay2: process.env.PRO_OVERLAY,
  overlay1: process.env.PRO_OVERLAY,
  overlay0: process.env.PRO_OVERLAY,
  surface2: process.env.PRO_SURFACE,
  surface1: process.env.PRO_SURFACE,
  surface0: process.env.PRO_SURFACE,

  base: process.env.PRO_BASE,
  mantle: process.env.PRO_BASE,
  crust: process.env.PRO_BASE,

}

const draculaProAlucard: Partial<Record<CatppuccinColor, string>> = {
  rosewater: process.env.ALUCARD_PINK,
  flamingo: process.env.ALUCARD_PINK,
  pink: process.env.ALUCARD_PINK,
  mauve: process.env.ALUCARD_PURPLE,
  red: process.env.ALUCARD_RED,
  maroon: process.env.ALUCARD_RED,
  peach: process.env.ALUCARD_ORANGE,
  yellow: process.env.ALUCARD_YELLOW,
  green: process.env.ALUCARD_GREEN,
  teal: process.env.ALUCARD_BLUE,
  sky: process.env.ALUCARD_BLUE,
  sapphire: process.env.ALUCARD_BLUE,
  blue: process.env.ALUCARD_BLUE,
  lavender: process.env.ALUCARD_BLUE,

  text: process.env.ALUCARD_TEXT,
  subtext1: process.env.ALUCARD_TEXT,
  subtext0: process.env.ALUCARD_TEXT,
  overlay2: process.env.ALUCARD_OVERLAY,
  overlay1: process.env.ALUCARD_OVERLAY,
  overlay0: process.env.ALUCARD_OVERLAY,
  surface2: process.env.ALUCARD_SURFACE,
  surface1: process.env.ALUCARD_SURFACE,
  surface0: process.env.ALUCARD_SURFACE,

  base: process.env.ALUCARD_BASE,
  mantle: process.env.ALUCARD_BASE,
  crust: process.env.ALUCARD_BASE,

}

export const varToHex: Record<CattppucinVariant, Partial<Record<string, string>>> = {
  latte: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: variants.latte[label].hex }), {}),
  dracula: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: dracula[label] }), {}),
  draculaPro: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: draculaPro[label] }), {}),
  draculaProAlucard: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: draculaProAlucard[label] }), {}),
}

export const hexToVar: Record<CattppucinVariant, Partial<Record<string, string>>> = {
  latte: Object.fromEntries(Object.entries(varToHex.latte).map(([label, hex]) => [hex, label])),
  dracula: Object.fromEntries(Object.entries(varToHex.dracula).map(([label, hex]) => [hex, label])),
  draculaPro: Object.fromEntries(Object.entries(varToHex.draculaPro).map(([label, hex]) => [hex, label])),
  draculaProAlucard: Object.fromEntries(Object.entries(varToHex.draculaProAlucard).map(([label, hex]) => [hex, label])),
}

export const cssVarStyleTags: Record<CattppucinVariant, string> = {
  latte: `\n<style>:root {${Object.entries(varToHex.latte).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  dracula: `\n<style>:root {${Object.entries(varToHex.dracula).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  draculaPro: `\n<style>:root {${Object.entries(varToHex.draculaPro).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  draculaProAlucard: `\n<style>:root {${Object.entries(varToHex.draculaProAlucard).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
}
