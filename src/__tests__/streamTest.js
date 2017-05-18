import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { timeStream } from '../streams'

let expect = chai.expect;

describe('Stream', function() {
    it('timeStream returns a generator', function() {
        const it = timeStream()
        expect(it.next).to.be.a('function')
        expect(it.throw).to.be.a('function')
    })

})
