import axios from "../../axios/axios-quiz";
import {
    FETCH_QUIZ_SUCCESS,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS, QUIZ_RETRY,
    QUIZ_SUBMIT
} from "./actionsTypes";


export function fetchQuizes() {


    return async dispatch => {
        dispatch(fetchQuizesStart());
        try {
            const response = await axios.get("/quizes.json");
            const quizes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Test #${index + 1}`
                })
            });
            dispatch(fetchQuizesSuccess(quizes))
        } catch (e) {
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START

    }
}

function fetchQuizesSuccess(quizes) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
}


function fetchQuizesError(e) {
    return {
        type: FETCH_QUIZES_ERROR,
        e
    }
}

function fetchQuizSuccess(quiz) {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz
    };
}

export function fetchQuizByID(quizId) {
    return async dispatch => {
        dispatch(fetchQuizesStart());
        try {
            const response = await axios.get(`/quizes/${quizId}.json`);
            const quiz = response.data;
            dispatch(fetchQuizSuccess(quiz));
        } catch (e) {
            console.error(fetchQuizesError(e))
        }
    }
}

export function quizAnswerSubmit(id) {
    return (dispatch, getState) => {
        const state = getState().quiz;
        if (parseInt(state.quiz[state.numberQuestion].rightAnswerId) === id) {
            dispatch(quizSetState(
                state.numberQuestion + 1,
                state.result + 1
            ));
        } else {
            dispatch(quizSetState(
                state.numberQuestion + 1,
                state.result
            ));
        }
    }
}

export function quizSetState(numQ, res ) {
    return{
        type: QUIZ_SUBMIT,
        numQ,
        res
    }
}


export function quizRetry() {
    return{
        type: QUIZ_RETRY
    }
}