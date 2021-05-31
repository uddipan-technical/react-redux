import demoData from '../../fakeData/fakeData.json'

const initialState = {
    demoData: demoData.results,
    watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : []
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_WATCHLIST': {
            const newState  = {
                ...state,
                watchList: [...state.watchList, action.payload]
            }
            localStorage.setItem('watchList', JSON.stringify(newState.watchList));
            localStorage.setItem('watched', JSON.stringify(newState.watched));
            return newState;
        }

        case 'REMOVE_FROM_WATCHLIST': {
            const newState  = {
                ...state,
                watchList: state.watchList.filter((m) => m.id !== action.payload.id),
            }

            localStorage.setItem('watchList', JSON.stringify(newState.watchList));
            localStorage.setItem('watched', JSON.stringify(newState.watched));
            return newState;
        }

        case 'ADD_TO_WATCHED': {
            const newState  = {
                ...state,
                watched: [...state.watched, action.payload]
            }

            localStorage.setItem('watchList', JSON.stringify(newState.watchList));
            localStorage.setItem('watched', JSON.stringify(newState.watched));
            return newState;
        }

        case 'REMOVE_FROM_WATCHED': {
            const newState  = {
                ...state,
                watched: state.watched.filter((m) => m.id !== action.payload.id)
            }
            localStorage.setItem('watchList', JSON.stringify(newState.watchList));
            localStorage.setItem('watched', JSON.stringify(newState.watched));
            return newState;
        }
    
        default: {
            return state;
        }
    }
}

export default movieReducer;