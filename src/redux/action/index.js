// import { DELETE, EDIT, KEYWORD, SUBMIT } from "../constant";
import * as ActionType from "./../constant";

export const actDelete = (user) => {
    return {
        type: ActionType.DELETE,
        payload: user
    };
};

export const actEdit = (user) => {
    return {
        type: ActionType.EDIT,
        payload: user,
    };
};

export const actSubmit = (user) => {
    return {
        type: ActionType.SUBMIT,
        payload: user,
    };
};

export const actGetKeyWord = (keyword) => {
    return {
        type: ActionType.KEYWORD,
        payload: keyword,
    };
};

export const actDatVe = (ghe) => {
    return {
        type: ActionType.DatVe,
        ghe,
    }
}

export const actHuyVe = (soGhe) => {
    return {
        type: ActionType.HuyVe,
        soGhe,
    }
}
