import { copy } from 'fs-extra'
import { globSync } from 'tinyglobby'

function toDest(file) {
  return file.replace(/^src\//, 'dist/')
}

globSync(['src/client/**']).forEach((file) => {
  if (/(\.ts|tsconfig\.json)$/.test(file)) return
  void copy(file, toDest(file))
})
