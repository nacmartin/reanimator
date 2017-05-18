import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import buildAnimation from '../animation'

let expect = chai.expect;

describe('Animation', function() {
    it('buildAnimation returns a generator', function() {
        const animation = buildAnimation({
            streams: [ 'TIME' ],
            systems: [
                {
                    input: 'TIME',
                    output: 'x',
                    domain: [Date.now(), Date.now() + 4000],
                    range: [100, 200],
                    easing: 'linear',
                },
            ]
        })
        expect(typeof animation.next).to.equal('function')
        expect(typeof animation.throw).to.equal('function')
    })

})
