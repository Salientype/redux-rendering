const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // Add a Name Tag

    switch (type) {
        
        case 'ADD_NAME':
            
            return [
                ...state,
                action.name
            ]
    
        default:
            return state;
    }
}