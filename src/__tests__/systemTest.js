import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import buildSystem from '../system'

let expect = chai.expect;

describe('System', function() {
    it('System can compute values', function() {
        const systemSpec = {
            input: 'some',
            output: 'some_other',
            domain: [-1000, 1000],
            range: [100, 200],
            easing: 'easeLinear',
        }
        const system = buildSystem(systemSpec)
        expect(system.compute(0)).to.equal(150)
    })
    it('System out of domain is in max or min range', function() {
        const systemSpec = {
            input: 'some',
            output: 'some_other',
            domain: [-1000, 1000],
            range: [100, 200],
            easing: 'easeLinear',
        }
        const system = buildSystem(systemSpec)
        expect(system.compute(-2000)).to.equal(100)
        expect(system.compute(2000)).to.equal(200)
    })
    it('System has an input', function() {
        const systemSpec = {
            input: 'some',
            output: 'some_other',
            domain: [-1000, 1000],
            range: [100, 200],
            easing: 'easeLinear',
        }
        const system = buildSystem(systemSpec)
        expect(system.input).to.equal('some')
    })
})
