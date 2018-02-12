import React, {Component} from 'react';
import './components/NavigationBar';
import MainPageView from "./components/MainPageView";
import {Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";
import CreateEditPostView from "./components/CreateEditPostView";
import Navigation from "./components/NavigationBar";
import CreatePost from "./components/CreatePost";

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
                    <Route exact path='/' component={MainPageView}/>

                    <Route path="/NewPost" component={CreatePost}/>

                    <Route exact path="/:category" render={(props) => (
                        <MainPageView
                        category={props.match.params.category}/>
                    )}/>

                    <Route exact path="/:category/:id" render={(props) => (
                        <CreateEditPostView
                            id={props.match.params.id}
                            category={props.match.params.category}
                        />
                    )}
                    />
                </Switch>
            </Container>
        )
    }
}
export default App;