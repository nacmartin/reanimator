export default function buildSystem(systemSpec) {

    const { domain, range, easing } = systemSpec
    const domainSpan = systemSpec.domain[1] - systemSpec.domain[0]
    const rangeSpan = systemSpec.range[1] - systemSpec.range[0]

    const compute = function (input) {
        return (input - systemSpec.domain[0]) * (rangeSpan / domainSpan) + systemSpec.range[0]
    }
    return { compute, input : systemSpec.input }
}
