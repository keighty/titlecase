import chai from 'chai'

const titlecase = require('../index.js');
const should = chai.should();
const expect = chai.expect;

describe('titlecase', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true
  })
  it('should be callable on String', () => {
    expect(typeof "stringy thingy".titlecase).to.be.eql('function')
  })
})
