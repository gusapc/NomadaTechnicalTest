const initialState = {
    list: [],
    isLoading: false,
    error: '',
    meta: {}
}

export default function ListReducer(modelName) {
    return (state = initialState, action) => {
        switch (action.type) {
            case `GET_${modelName}_BEGIN`:
                return {
                    ...state,
                    isLoading: true,
                    error: ''
                }
            case `GET_${modelName}_SUCCESS`:
                return {
                    ...state,
                    ...action.payload,
                    isLoading: false
                }
            case `RESET_${modelName}`:
                return {
                    ...initialState,
                }
            case `GET_${modelName}_FAILURE`:
                return {
                    ...state,
                    error: action.payload.error.status,
                    isLoading: false
                }
            case `${modelName}_STOP`:
                return {
                    ...state,
                    isLoading: false
                }
            case `RESET_${modelName}`:
                return {
                    ...initialState
                }
            case `PUSH_${modelName}`:
                return {
                    ...state,
                    list: state.list.concat(action.payload)
                }
            case `DELETE_ITEM_${modelName}`:
                return {
                    ...state,
                    list: state.list.filter(item => item.url != action.payload.url)
                }
            default:
                return state
        }
    }
}