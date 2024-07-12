module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	extends: [
		'eslint:recommended',
		'@nuxtjs/eslint-config-typescript',
		'plugin:vue/recommended',
		'plugin:prettier/recommended',
	],
	plugins: [],
	rules: {
		'vue/no-v-model-argument': 'off',
		'vue/multi-word-component-names': 'off',
	},
	overrides: [
		{
			files: ['*.css'],
			rules: { 'vue/comment-directive': 'off' },
		},
	],
};
