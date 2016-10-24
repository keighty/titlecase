import chai, { should, expect } from 'chai'
require('./test-helper')
import titlecase from '../index.js'

describe('titlecase', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true
  })
  it('should be callable on String', () => {
    expect(typeof 'stringy thingy'.titlecase).to.be.eql('function')
  })
  it('should capitalize a word', () => {
    const testString = 'the'
    const expected = 'The'
    expect(testString.titlecase()).to.be.eql(expected)
  })

  it('should capitalize all words', () => {
    const testString = 'the quick brown fox'
    const expected = 'The Quick Brown Fox'
    expect(testString.titlecase()).to.be.eql(expected)
  })

  it('should not capitalize a or the', () => {
    const testString = 'the quick and brown fox'
    const expected = 'The Quick and Brown Fox'
    expect(testString.titlecase()).to.be.eql(expected)
  })
})

describe('capitalize', () => {
  it('should be callable on String', () => {
    expect(typeof 'stringy thingy'.capitalize).to.be.eql('function')
  })
  it('should capitalize a word', () => {
    const testString = 'the thing'
    const expected = 'The thing'
    expect(testString.capitalize()).to.be.eql(expected)
  })
  it('should capitalize the first word always', () => {
    const testString = 'the quick brown fox'
    const expected = 'The quick brown fox'
    expect(testString.capitalize()).to.be.eql(expected)
  })
})