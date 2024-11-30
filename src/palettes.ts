import { type labels } from '@catppuccin/palette'

export type CattppucinVariant =
  | 'dracula'

export const catppuccinVariants = [
  'dracula',
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
  flamingo: '',
  pink: '#FF79C6',
  mauve: '#BD93F9',
  red: '#FF5555',
  maroon: '#FF5555',
  peach: '#FFB86C',
  yellow: '#F1FA8C',
  green: '#50FA7B',
  teal: '#4DB6AC',
  sky: '#8BE9FD',
  sapphire: '#4DB6AC',
  blue: '#8BE9FD',
  lavender: '',

  surface2: '',
  subtext0: '',
  subtext1: '',
  overlay0: '',
  overlay2: '',
  surface0: '',
  text: '#F8F8F2',
  overlay1: '#6272A4',
  surface1: '',

  base: '',
  mantle: '',
  crust: '',

}

export const varToHex: Record<CattppucinVariant, Partial<Record<string, string>>> = {
  dracula: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: dracula[label] }), {}),
}

export const hexToVar: Record<CattppucinVariant, Partial<Record<string, string>>> = {
  dracula: Object.fromEntries(Object.entries(varToHex.dracula).map(([label, hex]) => [hex, label])),
}

export const cssVarStyleTags: Record<CattppucinVariant, string> = {
  dracula: `\n<style>:root {${Object.entries(varToHex.dracula).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
}
