/* eslint quote-props: 0 */
module.exports = {
	extends: ['airbnb'],
	env: { browser: true, node: true },
	rules: Object.assign({}, require('./rules/base'), require('./rules/react'), require('./rules/jsx-a11y')),
};
