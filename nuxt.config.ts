// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	alias: {
		'@domain': '/<rootDir>/architecture/domain',
		'@application': '/<rootDir>/architecture/application',
		'@infrastructure': '/<rootDir>/architecture/infrastructure',
		'@presentation': '/<rootDir>/architecture/presentation',
	},
	devtools: { enabled: false },
	image: { dir: 'assets/images' },
	modules: [
		'@nuxt/image',
		'@pinia/nuxt',
		['@nuxtjs/google-fonts', { families: { Nunito: [400, 800] }, download: true }],
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/mixins" as *;',
				},
			},
		},
	},
});
