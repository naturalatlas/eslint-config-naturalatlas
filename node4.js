/* eslint quote-props: 0 */
module.exports = {
	extends: 'airbnb-base/legacy',
	env: { browser: false, node: true },
	parserOptions: {
		ecmaVersion: 6,
		ecmaFeatures: {
			jsx: false,
			experimentalObjectRestSpread: false,
		},
	},
	rules: Object.assign({}, require('./rules/base'), {
		'no-var': 0,
		'vars-on-top': 0,
	}),
};
