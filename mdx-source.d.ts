/** Matches `turbopack.rules` raw-loader for `*.mdx`; tsconfig `types` omits `@types/mdx`. */
declare module "*.mdx" {
  const source: string;
  export default source;
}
