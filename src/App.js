import React from 'react';
import Layout from "./hoc/layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import {Route, Switch} from 'react-router-dom'
import About from "./containers/About/About";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";


class App extends React.Component {
    render() {
        return (

            <Layout>
                <Switch>
                    <Route path="/" exact component={Quiz}/>
                    <Route path="/auth" exact component={Auth}/>
                    <Route path="/about" component={About}/>
                    <Route path="/quiz-create" component={QuizCreator}/>
                    <Route path="/quiz/:id" component={Quiz}/>
                    <Route path="/quiz-list" component={QuizList}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
