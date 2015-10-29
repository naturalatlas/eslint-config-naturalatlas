var fs     = require('fs');
var path   = require('path');
var exec   = require('child_process').exec;
var assert = require('chai').assert;
var bin    = path.resolve(__dirname, '../node_modules/.bin/eslint');

describe('eslint --fix', function() {
	it('should correct source properly', function(done) {
		var input = __dirname + '/fixtures/fix-input.js';

		var original = fs.readFileSync(input, 'utf8');
		exec(bin + ' ' + input + ' --fix', function(err, stdout, stderr) {
			var actual = fs.readFileSync(input, 'utf8');
			fs.writeFileSync(input, original); // restore original
			fs.writeFileSync(__dirname + '/output/out.js', actual); // for debugging

			if (err) {
				if (stdout) console.log('stdout:', stdout);
				if (stderr) console.log('stderr:', stderr);
				throw err;
			}

			var expected = fs.readFileSync(__dirname + '/fixtures/fix-output.js', 'utf8');
			assert.equal(actual, expected);
			done();
		});
	});
});
