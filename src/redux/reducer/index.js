const initialState = {
    animes: [],

}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ANIMES':
            return {
                ...state,
                animes: action.payload
            }

        case 'SEARCH_BY_NAME':

            return {
                ...state,
                animes: action.payload
            }

        case 'SEARH_BY_PAGE':
            return {
                ...state,
                animes: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;