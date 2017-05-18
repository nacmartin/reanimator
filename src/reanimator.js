import defaultRaf from 'raf'
import buildAnimation from './animation'

export default class Reanimator {
    constructor() {
        this.dispatcher = null
        this.state = {}
        this.animation = null
        this.runAnimation = this.runAnimation.bind(this)
        this.setState = this.setState.bind(this)
        //this.setDispatcher = this.setDispatcher.bind(this)

        defaultRaf(this.runAnimation)
    }

    setDispatcher(dispatcher) {
        this.dispatcher = dispatcher
    }

    setState(state) {
        this.state = state
        this.animation = buildAnimation(state)
    }

    runAnimation() {
        this.dispatcher && this.animation && this.dispatcher({type: 'REANIMATOR/ANIMATE', properties: {...this.animation.next().value}})
        //this.dispatcher && this.dispatcher({type: 'REANIMATOR/REANIMATE', x: 1000})
        defaultRaf(this.runAnimation)
    }
}
