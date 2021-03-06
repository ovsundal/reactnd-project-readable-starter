import React, {Component} from 'react';
import './components/utils/NavigationBar';
import MainPageView from "./components/view/MainPageView";
import {Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";
import CreateEditPostView from "./components/view/CreateEditPostView";
import Navigation from "./components/utils/NavigationBar";
import CreatePost from "./components/post/CreatePost";
import 'font-awesome/css/font-awesome.min.css'

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
                    <Route exact path="/" render={() =>
                        <MainPageView
                            category="all"/>
                    }/>

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