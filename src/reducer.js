const initialState = {}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'REANIMATOR/ANIMATE':
            return {...state, [action.property]: action.value}
        default:
            return state
    }
}
