import defaultRaf from 'raf'
import buildAnimation from './animation'

export default class Reanimator {
    constructor(options) {
        this.dispatcher = null
        this.state = {}
        this.animation = null
        this.runAnimation = this.runAnimation.bind(this)
        this.setState = this.setState.bind(this)
        //this.setDispatcher = this.setDispatcher.bind(this)
        this.raf = options.raf || defaultRaf
        this.cancelled = false

        this.raf(this.runAnimation)
    }

    setDispatcher(dispatcher) {
        this.dispatcher = dispatcher
    }

    setState(state) {
        this.state = state
        this.animation = buildAnimation(state)
    }

    cancel() {
        this.cancelled = true
    }

    runAnimation() {
        if (!this.cancelled) {
            this.dispatcher && this.animation && this.dispatcher({type: 'REANIMATOR/ANIMATE', properties: {...this.animation.next().value}})
            this.raf(this.runAnimation)
        }
    }
}
