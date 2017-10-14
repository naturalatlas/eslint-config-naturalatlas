# eslint-config-naturalatlas

A [ESLint](http://eslint.org/) config for [Natural Atlas](https://github.com/naturalatlas) projects that's based off [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

### Installation

```
$ npm install -g install-peerdeps
$ install-peerdeps --dev eslint-config-naturalatlas
```

### Usage

```js
// modern / transpiled environments
{"extends": "naturalatlas"}

// when running directly
{"extends": "naturalatlas/node"}
{"extends": "naturalatlas/node4"}
```

### Overrides

Some of the rules may be too strict for your project,
but you can easily override any rules or options in your `.eslintrc`:

```json
{
	"extends": "naturalatlas",
	"rules": {}
}
```
