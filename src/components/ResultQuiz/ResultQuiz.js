import React from 'react'
import classes from './ResultQuiz.css'
import {Link} from "react-router-dom";
import Button from "../UI/Button/Button";


const ResultQuiz = (props) => (
    <div className={classes.ResultQuiz}>
        <div className={classes.ResultQuizWrapper}>
            <h1>Your result: {props.result}</h1>

                <Button
                    onClick={props.onRetry}>
                    Try again
                </Button>


            <Link to="/quiz-list">
                <Button>
                    Quiz list
                </Button>
            </Link>
        </div>
    </div>
);


export default ResultQuiz;