import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['static/react/main.tsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  loader: { '.png': 'file' },
  publicPath: 'http://localhost:1313/react',
  outdir: 'static/react',
})
