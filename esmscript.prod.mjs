import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['themes/superstoretheme/static/react/main.tsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  loader: { '.png': 'file' },
  publicPath: 'https://esuperstore.netlify.app/react',
  outdir: 'themes/superstoretheme/static/react',
})
