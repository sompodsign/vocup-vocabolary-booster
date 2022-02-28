import client from "../../config";

import {
    TUTORIAL_LIST_REQUEST,
    TUTORIAL_LIST_SUCCESS,
    TUTORIAL_LIST_FAIL

} from "../constants/tutorialConstants";

//action to load tutorials from server
export const listTutorials = () => async (dispatch) => {
    console.log("Actiion executed")
    try {
        dispatch({type: TUTORIAL_LIST_REQUEST});

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        }

        const {data} = await client.get('/tutorials', config);
        // console.log('action', data)

        dispatch({
            type: TUTORIAL_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TUTORIAL_LIST_FAIL,
            payload: error
        });
    }
};
