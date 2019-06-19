import axios from "axios";

const CLICK_MAIN_ACTION = "CLICK_MAIN_ACTION";

export const initial = {
    title: ''
};

export const click_main_action = (title) => {
    return {
        type: CLICK_MAIN_ACTION,
        payload: {
            title: title
        }
    }
}

export const mainActionReducer = (state, action) => {
    console.log(action.type)
	switch (action.type) {
        case CLICK_MAIN_ACTION:
            console.log(action.type, action.payload.title)
			return {
				...state, title:action.payload.title
			};
        default:
            return state;
    }
};
