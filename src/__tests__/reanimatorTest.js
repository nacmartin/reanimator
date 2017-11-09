import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Reanimator from '../reanimator'
import createMockRaf from 'mock-raf'

let expect = chai.expect

describe('Reanimator', function() {
    it('can dispatch an action', function() {
        let mockRaf = createMockRaf()
        let reanimator = new Reanimator({raf: mockRaf.raf})
        let cb = sinon.spy()
        reanimator.setDispatcher(cb)

        reanimator.setState({
            streams: [ 'TIME' ],
            outputs: [ 'x' ],
            systems: [
                {
                    input: 'TIME',
                    output: 'x',
                    domain: [Date.now(), Date.now() + 4000],
                    range: [100, 200],
                    easing: 'easeLinear',
                },
            ]
        })

        mockRaf.step({ count: 10 })
        expect(cb.callCount).to.equal(10)

    })
    it('can cancel an animation', function() {
        let mockRaf = createMockRaf()
        let reanimator = new Reanimator({raf: mockRaf.raf})
        let cb = sinon.spy()
        reanimator.setDispatcher(cb)

        reanimator.setState({
            streams: [ 'TIME' ],
            outputs: [ 'x' ],
            systems: [
                {
                    input: 'TIME',
                    output: 'x',
                    domain: [Date.now(), Date.now() + 4000],
                    range: [100, 200],
                    easing: 'easeLinear',
                },
            ]
        })

        mockRaf.step({ count: 10 })
        reanimator.suspend()
        mockRaf.step({ count: 10 })
        expect(cb.callCount).to.equal(10)

    })
    it('can resume an animation', function() {
        let mockRaf = createMockRaf()
        let reanimator = new Reanimator({raf: mockRaf.raf})
        let cb = sinon.spy()
        reanimator.setDispatcher(cb)

        reanimator.setState({
            streams: [ 'TIME' ],
            outputs: [ 'x' ],
            systems: [
                {
                    input: 'TIME',
                    output: 'x',
                    domain: [Date.now(), Date.now() + 4000],
                    range: [100, 200],
                    easing: 'easeLinear',
                },
            ]
        })

        mockRaf.step({ count: 10 })
        reanimator.suspend()
        mockRaf.step({ count: 10 })
        expect(cb.callCount).to.equal(10)
        reanimator.resume()
        mockRaf.step({ count: 5 })
        expect(cb.callCount).to.equal(15)

    })
})
