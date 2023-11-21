import antfu from '@antfu/eslint-config';
import unocss from '@unocss/eslint-config/flat'

/* Using custom configuration of Antfu's code style: https://github.com/antfu/eslint-config */
export default antfu(
	{
		typescript: {
			tsconfigPath: 'tsconfig.json',
		},
		stylistic: {
			indent: 'tab',
			quotes: 'single',
		},
		ignores: [
			'**/dist',
			'**/public',
			'**/__fixtures__',
			'**.config.{js,ts}',
			'.idea'
		],
		overrides: {
			typescript: {
				'ts/consistent-type-definitions': ['error', 'type'],
				'ts/no-unsafe-assignment': 'warn',
				'ts/no-unsafe-member-access': 'warn',
			},
		},
	},
	{
		files: ['tsconfig.json', 'package.json'],
		rules: {
			'jsonc/sort-keys': 'off',
		},
	},
	{
		rules: {
			'style/semi': ['error', 'always'],
		},
	},
	unocss
);
