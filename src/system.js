export default function buildSystem(systemSpec) {

    const { domain, range, easing } = systemSpec
    const domainSpan = systemSpec.domain[1] - systemSpec.domain[0]
    const rangeSpan = systemSpec.range[1] - systemSpec.range[0]

    const compute = function (input) {
        if (input < domain[0]) {
            return range[0]
        }
        if (input > domain[1]) {
            return range[1]
        }
        return (input - systemSpec.domain[0]) * (rangeSpan / domainSpan) + systemSpec.range[0]
    }
    return { compute, input : systemSpec.input }
}
