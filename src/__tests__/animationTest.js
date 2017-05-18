import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import buildAnimation from '../animation'

let expect = chai.expect;

describe('Animation', function() {
    it('buildAnimation returns a generator', function() {
        const animation = buildAnimation({
        })
        expect(animation.next).to.be.a('function')
        expect(animation.throw).to.be.a('function')
    })
    it('animation returns a state update', function() {
        const animation = buildAnimation({
            streams: [ 'TIME' ],
            outputs: [ 'x' ],
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
        let val = animation.next()
        expect(val.value).to.be.a('object')
    })

})
