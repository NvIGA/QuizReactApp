import React from 'react';
import Layout from "./hoc/layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import {Route, Switch, Redirect} from 'react-router-dom'
import About from "./containers/About/About";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import {connect} from "react-redux";
import Logout from "./components/Logout/Logout";
import {autoLogin} from "./store/actions/authActions";


class App extends React.Component {
    componentDidMount() {
        this.props.autoLogin();
    }

    render() {

        let routes = (
            <Switch>
                <Route path="/" exact component={Auth}/>
                <Route path="/auth" exact component={Auth}/>
                <Route path="/quiz-create" component={QuizCreator}/>
                <Route path="/quiz/:id" component={Quiz}/>
                <Route path="/quiz-list" component={QuizList}/>
                <Route path="/about" component={About}/>
                <Redirect to = "/"/>
            </Switch>
        );

        if(this.props.isAuthenticated){
            routes = (
                <Switch>
                    <Route path="/" exact component={QuizList}/>
                    <Route path="/quiz-create" component={QuizCreator}/>
                    <Route path="/quiz/:id" component={Quiz}/>
                    <Route path="/quiz-list" component={QuizList}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/about" component={About}/>
                    <Redirect to = "/"/>
                </Switch>
            )
        }
        return (

            <Layout>
                {routes}
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return{
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return{
        autoLogin: () => dispatch(autoLogin())
    }

}

export default connect (mapStateToProps, mapDispatchToProps)(App);
