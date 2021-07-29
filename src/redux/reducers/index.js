import { combineReducers } from "redux";
import bookingTicketReducer from "./bookingTicketReducer";

const rootReducer = combineReducers({
    //combine child reducer
    bookingTicketReducer,
});

export default rootReducer;
