import typescript from 'rollup-plugin-typescript2'
import size from 'rollup-plugin-size'

const plugins = [
  typescript({
    tsconfig: 'tsconfig.json',
    removeComments: true,
    useTsconfigDeclarationDir: true
  }),
  size()
]

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.umd.js', format: 'umd', name: 'pkg', sourcemap: true },
    { file: 'dist/index.js', format: 'esm', sourcemap: true },
    { file: 'dist/index.esm.js', format: 'esm', sourcemap: true }
  ],
  plugins
}
