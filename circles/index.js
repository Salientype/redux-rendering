const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const addCircleBtn = document.getElementById('addCircle');

const newColor = function() {

    return '#' + Math.floor(Math.random()*16777215).toString(16);

}

const newRadius = function() {

        const min = Math.ceil(50);
        const max = Math.floor(200);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

}

addCircleBtn.addEventListener('click', (e) => {

    const newCircle = { 
        
        radius: newRadius(),
        color: newColor()

    }

    dispatch({

        type: 'ADD_CIRCLE',
        name: newCircle

    })

});