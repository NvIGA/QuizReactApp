import React, {Component} from 'react';
import classes from './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuize/ActiveQuize";
import ResultQuiz from "../../components/ResultQuiz/ResultQuiz";
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {fetchQuizByID, fetchQuizes, quizAnswerSubmit, quizRetry} from "../../store/actions/quizActions";


class Quiz extends Component {


    submitQuestionHandle = (e, id) => {
        this.props.quizAnswerSubmit(id)
    };

    isFinished = () => {
        return this.props.numberQuestion > this.props.quiz.length - 1
    };

    componentDidMount() {
        this.props.fetchQuizByID(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.quizRetry();
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>

                    <h1>Quiz</h1>

                    {this.props.loading
                        ? <Loader/>
                        : this.isFinished()
                            ?
                            <ResultQuiz
                                result={this.props.result}
                                onRetry={this.props.quizRetry}
                            />
                            :
                            <ActiveQuiz
                                submitQuestionHandle={this.submitQuestionHandle}
                                numberQuestion={this.props.numberQuestion}
                                question={this.props.quiz[this.props.numberQuestion].question}
                                quiz={this.props.quiz}
                                answers={this.props.quiz[this.props.numberQuestion].answers}
                                key={this.props.numberQuestion}
                            />}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        opacityValue: state.quiz.opacityValue,
        result: state.quiz.result,
        numberQuestion: state.quiz.numberQuestion,
        animatedClass: state.quiz.animatedClass,
        quiz: state.quiz.quiz,
        quizes: state.quiz.quizes,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizes: () => dispatch(fetchQuizes()),
        fetchQuizByID: id => dispatch(fetchQuizByID(id)),
        quizAnswerSubmit: id => dispatch(quizAnswerSubmit(id)),
        quizRetry: () => dispatch(quizRetry())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)