import { timeStream } from './streams'
import buildSystem from './system'

export default function buildAnimation(state) {
    let streams = {'TIME': timeStream()}

    function pullStream(stream) {
        return stream.next().value
    }

    function pullSystem(system) {
        const input = system.input
        if (streams[input] !== undefined) {
            return system.compute(pullStream(streams[input]))
        }
    }

    function pullSignal(signal) {
        const systemDesc = state.systems.find((sys) => sys.output === signal)
        const system = buildSystem(systemDesc)
        return pullSystem(system)
    }

    function pullUpdate() {
        const update = state.outputs.reduce((acc, val) => {
            acc[val] = pullSignal(val)
            return acc
        }, {})
        return update
    }

    var gen = function* () {
        while (true) {
            yield pullUpdate()
        }
    }
    return gen()
}
