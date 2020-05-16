import { INCREMENT } from "../types";
import { DECREMENT } from "../types";

//These are our action creators
//the object that an action creators returns must have a type property

export const increment = () => {
    return {
        type: INCREMENT
    };
}

export const decrement = () => {
    return {
        type: DECREMENT
    };
}