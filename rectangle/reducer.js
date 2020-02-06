const initialState = {
    
    width: 100,
    height: 200,
    color: "#FF00FF"

};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, value } = action;

    switch (true) {

        // ACTION 1 - Increment height by 10
        case type === 'ADD_TEN_HEIGHT':

            return {
                ...state,
                height: state.height + value
            }

        // ACTION 2 - Increment width by 10
        case type === 'ADD_TEN_WIDTH':

            return {
                ...state,
                width: state.width + value
            }

        // ACTION 3 - Change the color to red
        case type === 'CHANGE_TO_RED':

            return {
                ...state,
                color: value
            }

        // ACTION 3 - Change the color to red
        case type === 'CHANGE_TO_BLUE':

            return {
                ...state,
                color: value
            }

        default:
            return state;
    
    }

}