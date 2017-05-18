import reducer from './reducer'

export default class Reanimator {
    constructor() {
        this.dispatcher = null
        this.state = {}
        this.animation = null
        this.runAnimation = this.runAnimation.bind(this)
        this.setState = this.setState.bind(this)
        this.setDispatcher = this.setDispatcher.bind(this)

        window.requestAnimationFrame(this.runAnimation)
    }

    setDispatcher(dispatcher) {
        this.dispatcher = dispatcher
    }

    setState(state) {
        this.state = state
        this.animation = buildAnimation(state)
    }

    runAnimation() {
        this.dispatcher && this.system && this.system.next(this.dispatcher)
        //this.dispatcher && this.dispatcher({type: 'REANIMATOR/REANIMATE', x: 1000})
        window.requestAnimationFrame(this.runAnimation)
    }
}

export { reducer }
