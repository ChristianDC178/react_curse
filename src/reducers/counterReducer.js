const counterReducer = (state = 0, action) => {

    if (!action.type) return state

    switch (action.type) {
        case 'INCREMENT':
            return ++state
        case 'DECREMENT':
            return --state
        default:
            return state
    }
}

export default counterReducer