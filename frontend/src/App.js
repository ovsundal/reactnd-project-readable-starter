import React, { Component } from 'react';
import './components/NavigationBar';
import MainPage from "./components/MainPageView";
import {Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";
import CreatePost from "./components/CreatePostView";
import Navigation from "./components/NavigationBar";

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Container className='app'>
                <Navigation/>

                {/*routing declarations*/}
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path="/NewPost" component={CreatePost}/>
                </Switch>
            </Container>
        )
    }
}
export default App;