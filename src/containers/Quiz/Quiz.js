import React, {Component} from 'react';
import classes from './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuize/ActiveQuize";
import ResultQuiz from "../../components/ResultQuiz/ResultQuiz";
import axios from '../../axios/axios-quiz'
import Loader from "../../components/UI/Loader/Loader";

// import { TransitionGroup, CSSTransition} from "react-transition-group"

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacityValue: false,
            result: 0,
            numberQuestion: 0,
            animatedClass: '',
            quiz: [],
            loading: true
        }
    }


    submitQuestionHandle = (e, id) => {
        if (parseInt(this.state.quiz[this.state.numberQuestion].rightAnswerId) === id) {
            this.setState((state) => {
                    return {
                        numberQuestion: state.numberQuestion + 1,
                        result: state.result + 1
                    }
                }
            );
        } else {
            this.setState((state) => {
                    return {
                        numberQuestion: state.numberQuestion + 1
                    }
                }
            );
        }
    };

    isFinished = () => {
        return this.state.numberQuestion > this.state.quiz.length - 1
    };

    onRetryHandler = () => {
        this.setState({
            numberQuestion: 0,
            result: 0
        })
    };

    async componentDidMount() {
        try {
            const response = await axios.get(`/quizes/${this.props.match.params.id}.json`);
            const quiz = response.data;
            this.setState({
                quiz,
                loading: false
            })

        } catch (e) {
            console.error(e)
        }
    }



    render() {



        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    {this.state.loading
                        ? <Loader/>
                        : this.isFinished()
                            ?
                            <ResultQuiz
                                result={this.state.result}
                                onRetry={this.onRetryHandler}
                            />
                            :
                            <ActiveQuiz
                                submitQuestionHandle={this.submitQuestionHandle}
                                numberQuestion={this.state.numberQuestion}
                                question={this.state.quiz[this.state.numberQuestion].question}
                                quiz={this.state.quiz}
                                answers={this.state.quiz[this.state.numberQuestion].answers}
                                key={this.state.numberQuestion}
                            />}

                </div>
            </div>
        )
    }
}

export default Quiz