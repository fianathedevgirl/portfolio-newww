import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import remarkEmbedder from '@remark-embedder/core';
import oembedTransformer from '@remark-embedder/transformer-oembed';
import WindiCSS from "vite-plugin-windicss";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    vite: {
        // @ts-ignore
        plugins: [WindiCSS()]
    },
    markdown: {
        remarkPlugins: ['remark-gfm', 'remark-smartypants',
            // https://mdxjs.com/guides/embed/
            // @ts-ignore
            [remarkEmbedder, { transformers: [[oembedTransformer]] }]]
    }
});
