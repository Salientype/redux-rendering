const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

// Buttons
const sortLikesBtn = document.getElementById('sortLikes');
const sortRetweetsBtn = document.getElementById('sortRetweets');
const sortRepliesBtn = document.getElementById('sortReplies');

// Listeners
sortLikesBtn.addEventListener('click', e => {

    dispatch({

        type: 'SORT_LIKES'

    });

});

sortRetweetsBtn.addEventListener('click', e => {

    dispatch({

        type: 'SORT_RETWEETS',

    });

});

sortRepliesBtn.addEventListener('click', e => {

    dispatch({

        type: 'SORT_REPLIES'

    });

});



