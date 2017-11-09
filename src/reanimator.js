import defaultRaf from "raf";
import buildAnimation from "./animation";

export default class Reanimator {
    constructor(options = {}) {
        this.dispatcher = null;
        this.state = {};
        this.animation = null;
        this.runAnimation = this.runAnimation.bind(this);
        this.setState = this.setState.bind(this);
        //this.setDispatcher = this.setDispatcher.bind(this)
        this.raf = options.raf || defaultRaf;
        this.suspended = false;

        this.raf(this.runAnimation);
    }

    setDispatcher(dispatcher) {
        this.dispatcher = dispatcher;
    }

    setState(state) {
        this.state = state;
        this.animation = buildAnimation(state);
    }

    suspend() {
        this.suspended = true;
    }

    resume() {
        this.suspended = false;
        this.raf(this.runAnimation);
    }

    runAnimation() {
        if (!this.suspended) {
            this.dispatcher &&
                this.animation &&
                this.dispatcher({
                    type: "REANIMATOR/ANIMATE",
                    properties: { ...this.animation.next().value }
                });
            this.raf(this.runAnimation);
        }
    }
}
