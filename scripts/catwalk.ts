import { exec } from 'node:child_process'
import consola from 'consola'

const cmd = [
  'catwalk',
  'assets/previews/dracula-icons.png',
  '-o assets/preview.webp',
  '-l composite',
].join(' ')

const cmd2x = [
  'catwalk',
  'assets/previews/dracula-icons@2x.png',
  '-o assets/preview@2x.webp',
  '-l composite',
].join(' ')

consola.info('Runing `catwalk` to generate preview...')

function walk(command: string) {
  return new Promise((resolve, reject) => {
    exec(command, (err, _out) => {
      if (err)
        reject(err)
      else
        resolve(_out)
    })
  })
}

Promise.all([walk(cmd), walk(cmd2x)])
  .then(() => consola.success('Successfully built catwalk preview!'))
  .catch(err => consola.error(err))
