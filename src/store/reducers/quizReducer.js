import {
    FETCH_QUIZES_ERROR,
    FETCH_QUIZ_SUCCESS,
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS,
    QUIZ_SUBMIT, QUIZ_RETRY
} from "../actions/actionsTypes";

const initialState = {
    quizes: [],
    loading: true,
    error: null,
    opacityValue: false,
    result: 0,
    numberQuestion: 0,
    animatedClass: '',
    quiz: []
};

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUIZES_START:
            return {
                ...state,
                numberQuestion: 0,
                result: 0,
                loading: true
            };
        case FETCH_QUIZES_SUCCESS:
            return {
                ...state,
                loading: false,
                quizes: action.quizes
            };
        case FETCH_QUIZ_SUCCESS:
            return {
                ...state,
                loading: false,
                quiz: action.quiz
            };
        case QUIZ_SUBMIT:
            return {
                ...state,
                numberQuestion: action.numQ,
                result: action.res
            };
        case QUIZ_RETRY:
            return {
                ...state,
                numberQuestion:0,
                result: 0
            };
        case FETCH_QUIZES_ERROR:
            return {...state, loading: false};
        default:
            return state

    }
}