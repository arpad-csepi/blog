// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders, svgoOptimizer } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://doas.best',
	integrations: [mdx(), sitemap()],
	prerenderConflictBehavior: 'error',
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport'
	},
	image: {
		dangerouslyProcessSVG: true,
		responsiveStyles: true
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
	experimental: {
		clientPrerender: true,
		contentIntellisense: true,
		svgOptimizer: svgoOptimizer({
			multipass: true,
			floatPrecision: 2,
		}),
		queuedRendering: {
			enabled: true,
			contentCache: true
		},
		rustCompiler: true
	},
});
