mocha.setup('bdd');
const assert = chai.assert;

describe('Pow', function(){
	it('should work', function(){
		assert.equal(pow(2,3),8);
	})
})

mocha.run();