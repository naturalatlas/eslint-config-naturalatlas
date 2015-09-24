## eslint-config-naturalatlas

A [ESLint](http://eslint.org/) config for [Natural Atlas](https://github.com/naturalatlas) projects.

## Usage

### With React

1. `npm install --save-dev eslint eslint-plugin-react eslint-config-naturalatlas`
2. add `"extends": "naturalatlas/react"` to your .eslintrc
3. add `eslint --fix ./lib/**` to package.json `test` script\

### Without React

1. `npm install --save-dev eslint eslint-config-naturalatlas`
2. add `"extends": "naturalatlas/base"` to your .eslintrc
3. add `eslint --fix ./lib/**` to package.json `test` script\

### Overrides

Some of the rules may be too strict for your project,
but you can easily override any rules or options like this:

```json
{
	"extends": "naturalatlas/base",
	"rules": {
		"space-before-function-paren": 0,
		"indent": [2, 2]
	},
	"env": {
		"mocha": true
	}
}
```
