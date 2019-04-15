import * as Types from '../../types/types';

const defaultState = {
    count: 0
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case Types.EXAMPLE_TEST:
            return {
                ...state,
                count: action.count
            }
        default: {
            return state
        }
    }
}