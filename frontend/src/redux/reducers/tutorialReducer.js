import {
    TUTORIAL_LIST_REQUEST,
    TUTORIAL_LIST_SUCCESS,
    TUTORIAL_LIST_FAIL,
    TUTORIAL_LIST_RESET,

} from "../constants/tutorialConstants";


//Tutorial list reducer
export const tutorialListReducer = (state = {tutorials: []}, action) => {
    switch (action.type) {
        case TUTORIAL_LIST_REQUEST:
            return {loading: true, tutorials: []};

        case TUTORIAL_LIST_SUCCESS:
            return {
                loading: false,
                tutorials: action.payload,
            };

        case TUTORIAL_LIST_FAIL:
            return {
                loading: false, error: action.payload.response
            };

        case TUTORIAL_LIST_RESET:
            return {loading: false, tutorials: []};

        default:
            return state;

    }
};
