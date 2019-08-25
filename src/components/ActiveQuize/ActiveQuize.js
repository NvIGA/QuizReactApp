import React from 'react'
import classes from './ActiveQuize.css'

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>
                    {props.numberQuestion + 1}. &nbsp;
                </strong>
                {props.question}
            </span>
            <small>{props.numberQuestion + 1} : {props.quiz.length}</small>
        </p>
        <ul>
            {props.answers.map((answers) => (
                    <li
                        key={answers.id}
                        onClick={(e) => {
                            return props.submitQuestionHandle(e, answers.id)}}>
                        {answers.text}

                    </li>
                )
            )}
        </ul>
    </div>
);


export default ActiveQuiz