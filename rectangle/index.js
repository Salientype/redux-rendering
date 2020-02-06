const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

const plusTenWidthBtn = document.getElementById('width');
const plusTenHeightBtn = document.getElementById('height');
const changeRedBtn = document.getElementById('red');
const changeBlueBtn = document.getElementById('blue');

plusTenWidthBtn.addEventListener('click', (e) => {

    dispatch({

        type: 'ADD_TEN_WIDTH',
        value: 10 

    })

});

plusTenHeightBtn.addEventListener('click', (e) => {

    dispatch({

        type: 'ADD_TEN_HEIGHT',
        value: 10

    })

});

changeRedBtn.addEventListener('click', (e) => {

    dispatch({

        type: 'CHANGE_TO_RED',
        value: 'red'

    })

});

changeBlueBtn.addEventListener('click', (e) => {

    dispatch({

        type: 'CHANGE_TO_RED',
        value: 'blue'

    })

});