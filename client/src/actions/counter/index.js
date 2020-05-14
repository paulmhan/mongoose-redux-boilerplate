import { INCREMENT } from "../types";

//These are our action creators
//the object that an action creators returns must have a type property

export const increment = () => {
    return {
        type: INCREMENT
    };
}