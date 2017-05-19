import * as Easing from 'd3-ease'

export default function buildSystem(systemSpec) {

    const { domain, range, easing } = systemSpec
    const domainSpan = systemSpec.domain[1] - systemSpec.domain[0]
    const rangeSpan = systemSpec.range[1] - systemSpec.range[0]
    const easingFn = Easing[easing]

    const compute = function (input) {
        if (input < domain[0]) {
            return range[0]
        }
        if (input > domain[1]) {
            return range[1]
        }
        return easingFn(((input - systemSpec.domain[0]) / domainSpan)) * rangeSpan + systemSpec.range[0]
    }
    return { compute, input : systemSpec.input }
}
